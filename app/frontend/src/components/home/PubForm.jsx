import React from 'react'
import {Box, Link, FormControl, Input, Icon, Image, Button, Flex} from '@chakra-ui/react'

import User from '../assets/images/user-icon.jpg'

const form = props =>
    <React.Fragment>
        <Box
            as='span'
            gridArea='img'>
            <Link href="/">
                <Image 
                    src={User} 
                    alt={props.alt}
                    w='50px'
                    h='50px'
                    borderRadius='50%'
                    _hover={{
                        border: '2px solid rgb(194, 56, 58, 1)', 
                        boxShadow: '0px 0px 3px #C2383A'}}/>
            </Link>
        </Box>
        <FormControl 
            as='form'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Input 
                type="text" 
                placeholder="Publicar..." 
                pl='15px'
                w='400px'
                h='36px'
                m='10px 0px 10px 10px'
                border='1px solid'
                borderColor='rgba(194, 56, 58, 0.5)'
                borderRadius='25px'
                outline='transparent'
                fontFamily='Open sans, sans-serif'
                fontSize='14px'
                _hover={{
                    border:'1px solid', 
                    borderColor: 'rgba(194, 56, 58, 0.5)'}}
                _focus={{
                    boxShadow:'0px 0px 3px #C2383A', 
                    borderColor: 'rgba(194, 56, 58, 0.5)'}}/>
        </FormControl>
        <Flex 
            justifyContent='center'
            alignItems='center'>
            <Button
                bgColor='transparent'
                _hover={{border: 'none'}}
                _active={{bgColor: 'transparent'}}>
                <Link 
                    href="/"
                    _focus={{border: 'none'}}>
                    <Icon width="20px" height="20px" viewBox="0 0 16 16">
                        <path fill="#C2383A" d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </Icon>
                </Link>
            </Button>
        </Flex>
    </React.Fragment>

export default form