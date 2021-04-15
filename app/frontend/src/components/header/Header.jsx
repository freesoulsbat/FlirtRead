import React from 'react'
import {Box} from '@chakra-ui/react'

import Brand from './Brand'
import FormHeader from './FormHeader'
import NavHeader from './NavHeader'

const header = props => 
    <Box
        as='header'
        gridArea='header'
        display='grid'
        gridTemplateColumns='22% 50% 28%'
        gridTemplateAreas="'logo form buttons'"
        bgColor='white'
        zIndex='100'
        boxShadow='0px 0px 10px 0px rgba(0,0,0,0.2)'
        borderBottomRightRadius='25px'
        borderBottomLeftRadius='25px'
        >
        <Brand/>
        <FormHeader/>
        <NavHeader/>
    </Box>

export default header