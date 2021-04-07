import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Explorer from '../components/explorer/Explorer'
import Profile from '../components/profile/Profile'

const routes = props =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/explorer' component={Explorer}/>
        <Route path='/profile' component={Profile}/>
        <Redirect from='*' to='/'/>
    </Switch>
export default routes