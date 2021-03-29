import React from 'react'
import {Box, FormControl} from '@chakra-ui/react'

import NewButton from '../templates/NewButton'

const menu = props =>
    <Box 
        as='aside'
        mt='15px'
        w='100%'>
        <FormControl 
            h='100vh'
            display='flex'
            flexDirection='column'
            alignItems='center'>
            <NewButton text="Home"/>
            <NewButton text="Amigos"/>
            <NewButton text="Encontre um Boosh"/>
            <NewButton text="Sugestões de Leitura"/>
            <NewButton text="Top Books"/>
        </FormControl>
    </Box>

export default menu