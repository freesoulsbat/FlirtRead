import React from 'react'
import ProfilePicture from './ProfilePicture.jsx'
import Bio from './Bio.jsx'
import { Box } from "@chakra-ui/react"

const ProfileGridFinal = props =>
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
    <ProfilePicture/>
    <Bio/>
</Box>

export default ProfileGridFinal