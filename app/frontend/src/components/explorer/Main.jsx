import React from 'react'
import { Box } from '@chakra-ui/react'

import Tabs from './Tabs'
// import Content from './Content'


const tabs = props =>
    <Box 
        gridArea='content'
        display='grid'
        gridTemplateColumns='100%'
        gridTemplateRows='100vh'
        gridTemplateAreas="'content content content'">        
        <Tabs/>
    </Box>
    
export default tabs