import React, { Component } from 'react'
import Navbar from './layout/Navbar'
import Content from './layout/Content'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Registration from './Registration';
import Home from './layout/Home';
 class App extends Component {
   render(){ 
   return(
   <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Registration />
          </Route>
          <Route path="/users">
            <Content />
          </Route>
          <Route path="/">
           <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );}

}

export default App;