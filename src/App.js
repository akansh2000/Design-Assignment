import logo from './images/logo.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './style.css';
import Home from './Home';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
    
    <Switch>
    <Route exact path='/Design-Assignment' component={Nav} />
    <Redirect to='/Design-Assignment' />
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
