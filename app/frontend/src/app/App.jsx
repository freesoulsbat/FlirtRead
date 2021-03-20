import React from 'react'
import './app.css'
import Header from '../components/Header'
import Leftside from '../components/Leftside'
import Main from '../components/Main'




export default class App extends React.Component {

    render(){
        return <div className="app">
            <Header/>
            <Leftside/>
            <Main/>
        </div>
    }

} 
    
