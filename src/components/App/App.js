import React, { createContext, useState } from 'react';
import './App.css';
import '../Common/CommonStyle.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../Home/Home/Home';
import About from '../About/About';
import Contact from '../Contactus/Contact'
import Login from '../Login/Login/Login';
import ExpertAppointment from '../ExpertAppointment/ExpertAppointment/ExpertAppointment';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import AddAdmin from '../Admin/AddAdmin/AddAdmin';
import AddExpert from '../Admin/AddExpert/AddExpert';
import AdminList from '../Admin/AdminList/AdminList';
import ExpertList from '../Admin/ExpertList/ExpertList';

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
          <Route path='/connectExpert'> <ExpertAppointment /> </Route>
          <PrivateRoute path='/dashboard'> <Dashboard /> </PrivateRoute>
          <PrivateRoute path='/AddAdmin'> <AddAdmin /> </PrivateRoute>
          <PrivateRoute path='/AddExperts'> <AddExpert /> </PrivateRoute>
          <PrivateRoute path='/adminList'> <AdminList /> </PrivateRoute>
          <PrivateRoute path='/expertList'> <ExpertList /> </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
