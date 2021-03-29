import React, { Fragment } from 'react'
import {Box, Divider} from '@chakra-ui/react'

import PubButtons from './PubButtons'
import PubForm from './PubForm'

const main = props =>
    <Fragment>
        <Box 
            gridArea='content'
            display='flex'
            alignItems='center'
            flexDirection='column'>
            <Box
                as='main' 
                display='grid'
                gridTemplateColumns='50px 1fr 50px'
                gridTemplateRows='50px 50px'
                gridTemplateAreas="'img input icon' '. buttons .'"
                mt='30px'
                mb='10px'
                borderRadius='15px'
                bgColor='#faf0f0'
                p='5px'>
                <PubForm/>
                <PubButtons/>
                {/* <div className="main-content">
                    Oi
                </div> */}
            </Box>
            <Divider
                width='100%'
                orientation='horizontal'
                borderColor='rgba(194, 56, 58, 1)'/>
        </Box>
    </Fragment>

export default main

