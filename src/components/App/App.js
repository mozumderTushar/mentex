import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'> <Home/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
