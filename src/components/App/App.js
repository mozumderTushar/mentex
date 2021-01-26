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

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route path='/About'> <About /> </Route>
          <Route path='/Contact'> <Contact /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
