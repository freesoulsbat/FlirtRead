import React from 'react'
import './app.css'
import {HashRouter} from 'react-router-dom'

import Routes from './Routes'


export default class App extends React.Component {

    render(){
        return (
        <React.Fragment >
            <HashRouter>
                <Routes/>
            </HashRouter>
        </React.Fragment>
        )
    }

} 
    
