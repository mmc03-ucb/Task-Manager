import { GiHamburgerMenu } from 'react-icons/gi/';
import { BsSearch, BsCheckCircleFill } from 'react-icons/bs';
import myWindow from './Dashboard';

const login = () => {
  myWindow = window.open ('/login');
}

export function Header(props) {
  const { tasksTotal, tasksCompleted, onToggle, onSearch, searchValue } = props;

  return (
    <div className="header">
      <div className="left-menu-container">
        <div className="left-menu">
          <GiHamburgerMenu className="hamburger-icon" onClick={onToggle} />

          <div className="search_box_wrapper">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder=" Quick Find"
              name="search"
              value={searchValue}
              onChange={(e) => onSearch(e.target.value)}
              className="searchbar"
            />
          </div>
        </div>
      </div>
      <div className="right-menu-container">
        <button onClick={login} style={{backgroundColor: "pink"}}>
          Log Out
        </button>
      </div>
    </div>
  )
}