import React, { createContext, useState } from 'react';
import './App.css';
import '../Common/CommonStyle.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home/Home';
import About from '../About/About';
import Contact from '../Contactus/Contact'
import NavBar from '../Shared/NavBar/NavBar';
import Login from '../Login/Login/Login';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route path='/about'> <About /> </Route>
          <Route path='/contact'> <Contact /> </Route>
          <Route path='/login'> <Login /> </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
