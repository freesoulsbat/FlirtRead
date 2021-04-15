import React from 'react'
import {Box, Divider} from '@chakra-ui/react'

const sugestions = props => 
    <Box
        as='aside' 
        gridArea='sugestions'
        display='grid'
        gridTemplateColumns='50px 1fr 50px'
        gridTemplateRows='30px 250px 50px 250px 50px'
        gridTemplateAreas="'divider title .' 'divider content1 .' 'divider . .' 'divider content2 .' 'divider . .'">
        <Box 
            gridArea= 'content1'
            borderRadius='15px'
            boxShadow='0px 0px 10px 0px rgba(0,0,0,0.2)'
            bgColor='white'>
        </Box>
        <Box 
            gridArea='content2'
            borderRadius='15px'
            boxShadow='0px 0px 10px 0px rgba(0,0,0,0.2)'
            bgColor='white'>
        </Box>
        <Divider
            as='hr'
            gridArea='divider'
            bgColor='rgba(194, 56, 58, 1)'
            orientation='vertical'
            width='1px'
            height='100vh'
            mt='30px'/>
    </Box>
export default sugestions