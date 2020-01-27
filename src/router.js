import {Switch, Route, HashRouter} from "react-router-dom"
import React from "react"
import Home from "../src/components/Home"






export default ( 
    <HashRouter>
        <Switch>
          <Route path="/" component={Home}/>
       </Switch>
    </HashRouter>   
)