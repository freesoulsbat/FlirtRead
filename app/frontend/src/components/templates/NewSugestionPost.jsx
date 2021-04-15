import React from 'react'
import {Image, Text, Heading, Link, Box} from '@chakra-ui/react'

const text = props =>
    <Link href={props.link}
        _hover={{textDecoration: 'none'}}>
        <Box            
            as='div'
            bgColor='white'
            w='620px'
            h='150px'
            overflow='hidden'
            borderRadius='10px'
            boxShadow='0px 0px 10px 0px rgba(0,0,0,0.1)'>
            <Box
                as='div'
                display='grid'
                gridTemplateColumns='20% 80%'
                gridTemplateRows='30px 120px'
                gridTemplateAreas="'imagem titulo' 'imagem texto'">
                <Box
                    as='div'
                    gridArea='imagem'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'>
                    <Image src={props.img}/>
                </Box>
                <Heading
                    p='8px'
                    gridArea='titulo'
                    fontSize='xl'
                    fontFamily='Roboto, sans-serif'
                    fontWeight='Medium'>
                        {props.headingText}
                </Heading>
                <Text
                    p='8px'
                    gridArea='texto'
                    fontSize='sm'
                    fontFamily='Open Sans, sans-serif'
                    fontWeight='Medium'
                    fontStyle='italic'>
                        {props.paragraphText}
                </Text>
            </Box>
        </Box>
    </Link> 
export default text