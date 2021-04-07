import React from 'react'
import {Avatar, Text, Heading, Link, Box} from '@chakra-ui/react'

const text = props =>
        <Box
            p='10px'
            as='div'
            bgColor='white'
            w='625px'
            h='150px'
            borderRadius='10px'
            display='grid'
            gridGap='10px'
            boxShadow='0px 0px 10px 0px rgba(0,0,0,0.1)'
            gridTemplateColumns='12% 85%'
            gridTemplateRows='20% 80%'
            gridTemplateAreas="'avatar titulo' 'avatar texto'">
            <Box
                as='div'
                gridArea='avatar'>
                <Link href={props.profileLink}>
                    <Avatar  size='lg' src={props.profile}/>
                </Link>
            </Box>
            <Heading
                gridArea='titulo'
                fontSize='xl'
                fontFamily='Roboto, sans-serif'
                fontWeight='Medium'>
                    {props.headingText}
            </Heading>
            <Text
                gridArea='texto'
                fontSize='sm'
                fontFamily='Open Sans, sans-serif'
                fontWeight='Medium'
                fontStyle='italic'>
                    {props.paragraphText}
            </Text>
        </Box>
export default text