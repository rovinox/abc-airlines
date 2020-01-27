import {Switch, Route, HashRouter} from "react-router-dom"
import React from "react"
import Home from "../src/components/Home"
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"
import Login from "./components/Login"






export default ( 
    <HashRouter>
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Home}/>
       </Switch>
    </HashRouter>   
)