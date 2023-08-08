import { useState } from 'react';
import { RiArrowDownSLine, RiArrowRightSLine, RiUser3Fill } from 'react-icons/ri';
import { VscCircleFilled } from 'react-icons/vsc';
import { BsPlus } from 'react-icons/bs';

const subWorks = [
  {
    title: 'New Brand',
    count: 9,
    icon: VscCircleFilled,
    color: '#FAD002'
  },
  {
    title: 'Website Update',
    count: 11,
    icon: RiUser3Fill,
    color: '#94C2EB'
  },
  {
    title: 'Product Roadmap',
    count: 9,
    icon: RiUser3Fill,
    color: "#DB3C31"
  },
  {
    title: 'Meeting Agenda',
    count: 9,
    icon: RiUser3Fill,
    color: '#279235'
  },
]

export function LeftNavigation(props) {
  const { items, selectedItem, onItemChange, visible } = props;
  const [selectedProjects, setSelectedProjects] = useState(false);
  const [selectedWork, setSelectedWork] = useState(false);
  const [selectedPersonal, setSelectedPersonal] = useState(false);

  if (!visible) {
    return null;
  }

  return (
    <div className="left-navigation-container">
      {items.map(space => (
        <button
          onClick={() => onItemChange(space.space_id)}
          key={space.space_id}
          className="nav-item active"
        >
          <space.icon className="nav-item-icon" />
          <span className="nav-item-text">
            {space.space_id === selectedItem ? (
              <b>{space.space_name}</b>
            ) : (
              <span>{space.space_name}</span>
            )}
          </span>
          <span className="nav-item-counter">
            {space.tasks.length - space.tasks.reduce((acc, curr) => {
              if (curr.isCompleted) {
                return acc + 1;
              } else {
                return acc;
              }
            }, 0) || 0}
          </span>
        </button>
      ))}

      <button
        onClick={() => setSelectedProjects(!selectedProjects)}
        className="nav-item active"
      >
        {selectedProjects
          ? <RiArrowDownSLine className="nav-item-icon" />
          : <RiArrowRightSLine className="nav-item-icon" />
        }
        <span className="nav-item-text">
          {selectedProjects
            ? <b>Projects</b>
            : <span>Projects</span>
          }
        </span>
      </button>
      <hr style={{borderTop: "1px solid #e2e2e2"}}/>
      <button
        onClick={() => setSelectedWork(!selectedWork)}
        className="nav-item active"
        style={{ paddingLeft: 0 }}
      >
        {selectedWork
          ? <RiArrowDownSLine className="nav-item-icon" style={{margin: 0}} />
          : <RiArrowRightSLine className="nav-item-icon" style={{margin: 0}} />
        }
        <VscCircleFilled className="nav-item-icon" style={{color: "grey"}} />
        <span className="nav-item-text">
          Work
        </span>
      </button>
      {selectedWork && subWorks.map((subWork, index) => (
        <button className="nav-item" style={{paddingLeft: '44px'}} key={index}>
          <subWork.icon className="nav-item-icon" style={{color: subWork.color}}/>
          <span className="nav-item-text">
            <span>{subWork.title}</span>
          </span>
          <span className="nav-item-counter">
            {subWork.count}
          </span>
        </button>
      ))}

      <button
        onClick={() => setSelectedPersonal(!selectedPersonal)}
        className="nav-item active"
        style={{ paddingLeft: 0 }}
      >
        {selectedPersonal
          ? <RiArrowDownSLine className="nav-item-icon" style={{margin: 0}} />
          : <RiArrowRightSLine className="nav-item-icon" style={{margin: 0}} />
        }
        <VscCircleFilled className="nav-item-icon" style={{color: "grey"}} />
        <span className="nav-item-text">
          Personal
        </span>
        <span className="nav-item-counter">28</span>
      </button>

      <button className="nav-item active" style={{ marginTop: "7px" }}>
        <BsPlus className="nav-item-icon" />
        <span className="nav-item-text">
          Add Project
        </span>
      </button>
    </div>
  )
}