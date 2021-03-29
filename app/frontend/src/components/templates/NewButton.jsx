import React from 'react'
import {Box, Button} from '@chakra-ui/react'

const button = props =>
    <Box as='span'>
        <Button 
            m='15px 0px'
            bgColor='#C2383A'
            border='none'
            outline='transparent'
            w='200px'
            h='35px'
            borderRadius='25px'
            color='white'
            fontFamily='Open sans, sans-serif'
            fontWeight='medium'
            fontSize='14px'
            _hover={{
                cursor: 'pointer', 
                bgColor: 'rgba(194, 56, 58, 0.85)', 
                transform: 'scale(1.1)',
                transition: '0.5s'}}>
                {props.text}
        </Button>
    </Box>
export default button