import React from 'react'
import Logo from '../assets/images/thumb-logo.png'

// import { Link } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import {Link} from 'react-router-dom'

const brand = props =>
    <Flex justify="center" align="center">
        <Link to="/" _focus={{border: 'none'}}>
            <Image 
                src={Logo} 
                alt='logo'
                height="85px"
                />
        </Link>
    </Flex> 
    
    
    export default brand
    
    
// import '../styles/brand.css'

// jsx antigo abaixo
// <a href="#/" className="logo">
//     <img src={Logo} alt="Logo"/>
// </a>