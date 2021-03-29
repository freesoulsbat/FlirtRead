import React from 'react'
import {Box, Button, Link, Icon} from '@chakra-ui/react'

const buttons = props =>
    <Box 
        gridArea='buttons'
        display='flex'
        justifyContent='space-around'
        alignItems='flex-start'
        padding='0px 25px'
        >
        <Button
            bgColor='transparent'
            border='none'
            outline='transparent'
            _hover={{bgColor: 'inherit'}}
            _active={{bgColor: 'transparent'}}>
            <Link href="/" _focus={{border: 'none'}}>
                <Icon width="32px" height="32px" viewBox="0 0 16 16">
                    <path fill="#C2383A" d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path fill="#C2383A" d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                </Icon>
            </Link>
        </Button>
        <Button 
            bgColor='transparent'
            border='none'
            outline='transparent'
            _hover={{bgColor: 'inherit'}}
            _active={{bgColor: 'transparent'}}>
            <Link href="/" _focus={{border: 'none'}}>
                <Icon width="32px" height="32px" viewBox="0 0 16 16">
                    <path fill="#C2383A" fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                    <path fill="#C2383A" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </Icon>
            </Link>
        </Button>
        <Button 
            bgColor='transparent'
            border='none'
            outline='transparent'
            _hover={{bgColor: 'inherit'}}
            _active={{bgColor: 'transparent'}}>
            <Link href="/" _focus={{border: 'none'}}>
                <Icon width="32px" height="32px" viewBox="0 0 16 16">
                    <path fill="#C2383A" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                    <path fill="#C2383A" d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                </Icon>
            </Link>
        </Button>
        <Button 
            bgColor='transparent'
            border='none'
            outline='transparent'
            _hover={{bgColor: 'inherit'}}
            _active={{bgColor: 'transparent'}}>
            <Link href="/" _focus={{border: 'none'}}>
                <Icon width="32px" height="32px" viewBox="0 0 16 16">
                    <path fill="#C2383A" d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                    <path fill="#C2383A" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </Icon>
            </Link>
        </Button>
    </Box>
export default buttons


