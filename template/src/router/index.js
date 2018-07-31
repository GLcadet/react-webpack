import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import asyncComponent from 'common/asyncComponent'
import Home from 'pages/home/home' 

export default class RouteConfig extends Component{
    render(){
      return(
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/record" component={record} />
            <Route path="/helpcenter" component={helpcenter} />
            <Route path="/production" component={production} />
            <Route path="/balance" component={balance} /> */}
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      )
    }
  }