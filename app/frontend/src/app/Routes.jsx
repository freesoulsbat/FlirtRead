import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Explorer from '../components/explorer/Explorer'

const routes = props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/explorer' component={Explorer}/>
        <Redirect from='*' to='/'/>
    </Switch>
export default routes