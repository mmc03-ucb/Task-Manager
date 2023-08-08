

import { useEffect, useMemo } from "react";
import { Tasks } from "./components/Tasks";
import { LeftNavigation } from "./components/LeftNavigation";
import { useState } from "react";
import { Header } from "./components/Header";
import { initial_state } from "./utils/init";

export function MainPage() {
  const [spacesAndTasks, setSpacesAndTasks] = useState(initial_state);
  const [selectedSpace, setSelectedSpace] = useState(1);
  const [showNavigation, setShowNavigation] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const currentSpace = useMemo(
    () => spacesAndTasks.find(s => s.space_id === selectedSpace),
    [spacesAndTasks, selectedSpace]
  );

  const tasksCompleted = currentSpace.tasks.filter(task => !task.isCompleted).length;

  const tasksTotal = spacesAndTasks.reduce((acc, space) =>
    acc + space.tasks.filter(task => !task.isCompleted).length,
    0
  );

  const handleItemChange = (space) => {
    setSearchValue("");
    setSelectedSpace(space);
  }

  const handleTaskAdd = (task) => {
    setSpacesAndTasks(prevState => prevState.map(value => {
      if (value.space_id === selectedSpace) {
        return {
          ...value,
          tasks: [...value.tasks, task]
        }
      } else {
        return value;
      }
    }));
  }

  const handleTaskEdit = (task_id, task_description) => {
    setSpacesAndTasks(prevState => prevState.map(value => {
      if (value.space_id === selectedSpace) {
        return {
          ...value,
          tasks: value.tasks.map(x => {
            if (x.id === task_id) {
              return {
                ...x,
                description: task_description
              }
            } else {
              return x;
            }
          })
        }
      } else {
        return value;
      }
    }));
  }

  const handleTaskToggle = (task_id) => {
    setSpacesAndTasks(prevState => prevState.map(value => {
      if (value.space_id === selectedSpace) {
        return {
          ...value,
          tasks: value.tasks.map(x => {
            if (x.id === task_id) {
              return {
                ...x,
                isCompleted: !x.isCompleted,
              }
            } else {
              return x
            }
          })
        }
      } else {
        return value;
      }
    }));
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  }

  return (
    <div className="grid-container">
      <Header
        searchValue={searchValue}
        onSearch={handleSearch}
        onToggle={() => setShowNavigation(prevState => !prevState)}
        tasksCompleted={tasksCompleted}
        tasksTotal={tasksTotal}
      />

      <LeftNavigation
        visible={showNavigation}
        tasksCompleted={tasksCompleted}
        items={spacesAndTasks}
        selectedItem={selectedSpace}
        onItemChange={handleItemChange}
      />

      <div className="main-navigation">
        <h1>{currentSpace.space_name}</h1>
        <Tasks
          query={searchValue}
          onTaskEdit={handleTaskEdit}
          tasks={currentSpace.tasks}
          onTaskAdd={handleTaskAdd}
          onTaskToggle={handleTaskToggle}
        />
      </div>
    </div>
  )
}

export default MainPage
