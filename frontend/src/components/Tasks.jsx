import { useMemo, useState } from "react";
import { autocompleteMatch } from "../utils/search";
import { TaskItem } from "./TaskItem";
import { BsPlus } from 'react-icons/bs';

export function Tasks(props) {
  const [inputValue, setInputValue] = useState("");

  const { tasks, onTaskAdd, onTaskToggle, query, onTaskEdit } = props;

  const queriedTasks = useMemo(() => autocompleteMatch(tasks, query), [query, tasks]);

  const toggleTask = (id) => {
    onTaskToggle(id);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * Date.now() + 1000),
      description: inputValue,
      isCompleted: false,
    };

    // axios.post('/create', { inputValue })
    // .then ((response) => console.log(response))
    // .catch((error) => console.log(error));

    onTaskAdd(task);
    setInputValue("");
  }

  const handleEditTask = (id, taskInputValue) => {
    onTaskEdit(id, taskInputValue)
  }

  return (
    <ul>
      {queriedTasks.map(task => (
        <TaskItem
          key={task.id}
          onEdit={handleEditTask}
          id={task.id}
          onToggle={toggleTask}
          description={task.description} 
          isCompleted={task.isCompleted}
        />
      ))}
      <button
        className="submit_btn"
        onClick={handleAdd}
      >
        <BsPlus /> Add Task
      </button>
    </ul>
  )
}