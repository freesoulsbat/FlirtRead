import React from 'react'

import Main from './Main'
import Header from '../header/Header'
import { Box } from '@chakra-ui/react'

const explorer = props =>
    <Box
        as='div'
        display='grid'
        gridTemplateColumns='22% 50% 28%'
        gridTemplateRows='85px 100vh'
        gridTemplateAreas="'header header header' 'content content content'">
        <Header/>
        <Main/>
    </Box>
export default explorer