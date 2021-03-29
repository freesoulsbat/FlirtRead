import React from 'react'
import {Box, Divider} from '@chakra-ui/react'
import MenuAsideLeft from './MenuAsideLeft'

const leftside = props =>
    <Box 
        display='flex'
        gridArea='aside'>
        <MenuAsideLeft/>
        <Divider
            as='hr'
            bgColor='rgba(194, 56, 58, 1)'
            orientation='vertical'
            width='1px'
            height='100vh'
            mt='30px'/>
    </Box>

export default leftside