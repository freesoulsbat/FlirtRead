import React from 'react'
import './app.css'
import {HashRouter} from 'react-router-dom'
import {Box} from '@chakra-ui/react'

import Routes from './Routes'


export default class App extends React.Component {

    render(){
        return (
        <Box
            m='0px'
            display='grid'
            gridTemplateColumns='22% 50% 28%'
            gridTemplateRows='85px 10vh'
            gridTemplateAreas="'header header header''aside content sugestions'"
            >
            <HashRouter>
                <Routes/>
            </HashRouter>
        </Box>
        )
    }

} 
    
