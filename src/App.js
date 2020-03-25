import React from 'react';
import './App.css';
import HomePage from "./components/HomePage"
import ShopList from "./components/ShopList"
import ShopDetail from "./components/ShopDetail"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/shops/:country">
            <ShopList />
          </Route>
          <Route path="/shops/:country/:city">
            <ShopList />
          </Route>
          <Route exact path="/shop/:uuid">
            <ShopDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
