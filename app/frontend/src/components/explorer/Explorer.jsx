import React from 'react'

import Main from './Main'
import Header from '../header/Header'
import { Box } from '@chakra-ui/react'

const explorer = props =>
    <Box as='div'>
        <Header/>
        <Main/>
    </Box>
export default explorer