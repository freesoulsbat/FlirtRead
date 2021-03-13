import React from 'react'
import './app.css'
import Header from '../components/Header'
import Leftside from '../components/Leftside'
import Main from '../components/Main'
import Brand from '../components/Brand'



export default class App extends React.Component {

    render(){
        return <div className="app">
            <Brand/>
            <Header/>
            <Leftside/>
            <Main/>
        </div>
    }

} 
    
