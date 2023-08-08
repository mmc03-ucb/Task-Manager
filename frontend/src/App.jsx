import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from 'react-router-dom';

import {MainPage} from "./Page.jsx";

import {
  Dashboard
} from "./components/Dashboard.jsx"

import {
  Signup
} from "./components/Signup.jsx"
import {
  Login
} from "./components/Login.jsx"


export function App() {

    return (
      <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/success" element={<MainPage />} />
        </Routes>
      </Router>
    );
  }