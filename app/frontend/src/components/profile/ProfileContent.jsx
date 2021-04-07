import React from 'react'
import ProfileGridFinal from './ProfileGridFinal.jsx'
import { Box } from "@chakra-ui/react"

const ProfileContent = props =>
<Box 
    as='banner' 
    justify="center" 
    align="center" 
    m='0px' 
    gridArea='banner'
    display='grid'
    gridTemplateColumns='20% 60% 20%'
    gridTemplateRows='100vh'
    gridTemplateAreas="'. profilecontentt .'">
    <ProfileGridFinal/>
</Box>

export default ProfileContent