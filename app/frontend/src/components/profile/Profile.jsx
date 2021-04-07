import React from 'react'

import Header from '../header/Header'
import {Box} from '@chakra-ui/react'
import ProfileContent from './ProfileContent'

const Profile = props =>

<Box
        m='0px'
        display='grid'
        gridTemplateColumns='22% 50% 28%'
        gridTemplateRows='85px 100vh'
        gridTemplateAreas="'header header header''banner banner banner'">
        <Header/>
        <ProfileContent/>
</Box>
    
export default Profile

