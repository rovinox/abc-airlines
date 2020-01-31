import {Switch, Route, HashRouter, Redirect} from "react-router-dom"
import React from "react"
import Home from "../src/components/Home"
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"
import Login from "./components/Login"




export default function Router(props) {
    return (
        <HashRouter>
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" render={()=>(props.logedin ? <Profile/> : <Redirect to="/" /> )} />
          <Route path="/" component={Home}/>
       </Switch>
    </HashRouter>
    )
}




