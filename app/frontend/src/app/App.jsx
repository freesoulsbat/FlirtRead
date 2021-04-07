import React from 'react'
import './app.css'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './Routes'


export default class App extends React.Component {

    render(){
        return (
        <React.Fragment >
            <Router>
                <Routes/>
            </Router>
        </React.Fragment>
        )
    }

} 
    
