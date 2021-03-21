import React from 'react';
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import './App.css';
import NotificationText from './components/NotificationText';
import Login from './pages/Login/Login';
import TodoList from './pages/TodoList/TodoList';

function App() {
  return <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/tasks">
            <>
              <TodoList />
            </>
          </Route>
        </Switch>
      </div>
    </Router>
    <NotificationText />
  </>

}

export default App;
