import React from "react";

import "./App.css";
import Card from "./components/Card/";
import CardContainer from "./components/CardContainer/";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Searchbar from "./components/Searchbar"


function App() {
  return (
    <Router>
    <div>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
          <Route component={NoMatch}/>




        </Switch>
    </div>
    </Router>
  );
}


export default App;
