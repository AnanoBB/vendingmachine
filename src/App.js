import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './chips';
import Soda from './soda';
import Sardines from './sardines'
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={() =>  <VendingMachine />} />
      <Route exact path="/soda" render={() =>  <Soda />} />
      <Route exact path="/chips" render={() =>  <Chips />} />
      <Route exact path="/sardines" render={() =>  <Sardines />} />
      </Switch>
      
      
    </div>
  );
}

export default App;
