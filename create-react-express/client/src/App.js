import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Saved from "./pages/Saved"
import Search from "./pages/Search"
import NoMatch from "./pages/NoMatch"




function App() {
  return (
    <div>
    <Router>
   
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/home" component={Search}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
          <Route component={NoMatch}/>

        </Switch>
    
    </Router>
    </div>
  );
}


export default App;
