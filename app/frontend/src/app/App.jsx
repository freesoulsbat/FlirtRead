import React from 'react'
import './app.css'
import Header from '../components/header/Header'
import Leftside from '../components/home/AsideLeft'
import Main from '../components/home/Main'
import Sugestions from '../components/home/SugestionsAndOthers'


export default class App extends React.Component {

    render(){
        return <div className="app">
            <Header/>
            <Leftside/>
            <Main/>
            <Sugestions/>
        </div>
    }

} 
    
