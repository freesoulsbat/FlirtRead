import React from 'react'
import Header from '../header/Header'
import Main from './Main'
import AsideLeft from './AsideLeft'
import SugestionsAndOthers from './SugestionsAndOthers'
import {Box} from '@chakra-ui/react'


const home = props =>
    <Box
        m='0px'
        display='grid'
        gridTemplateColumns='22% 50% 28%'
        gridTemplateRows='85px 100vh'
        gridTemplateAreas="'header header header''aside content sugestions'">
        <Header/>
        <AsideLeft/>
        <Main/>
        <SugestionsAndOthers/>
    </Box>

export default home