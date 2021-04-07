import React from 'react'
import {Image, Link, Box} from '@chakra-ui/react'

const img = props =>
    <Box
        as='div'>
        <Link href={props.link}>
            <Image 
                src={props.src}
                width={props.width}
                height={props.height}
                borderRadius='10px'/>
        </Link>
    </Box>

export default img