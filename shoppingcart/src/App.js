import React from 'react';
import './App.css';
import HomePage from './Container/HomePage';
import Biscuts from './Container/Biscuts';
import Womenwear from './Container/Womenwear';
import Menwear from './Container/Menwear';
import Chocolate from './Container/Chocolate';
import Mobile from './Container/Mobile';
import Household from './Container/Household';
import SingleProduct from './Container/SingleProduct';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={HomePage}/>
          <Route path={"/biscuts"} component={Biscuts}/>
          <Route path={"/womenwear"} component={Womenwear}/>
          <Route path={"/menwear"} component={Menwear}/>
          <Route path={"/chocolate"} component={Chocolate}/>
          <Route path={"/mobile"} component={Mobile}/>
          <Route path={"/household"} component={Household}/>
          <Route path={"/singleproduct"} component={SingleProduct}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
