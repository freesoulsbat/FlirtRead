import React from 'react'
import {Grid} from '@chakra-ui/react'
import Image1 from '../assets/images/posts/ft1.jpg'
import Image2 from '../assets/images/posts/ft2.jpg'
import Image3 from '../assets/images/posts/ft3.jpg'
import Image4 from '../assets/images/posts/ft4.jpg'
import Image5 from '../assets/images/posts/ft5.jpg'
import Image6 from '../assets/images/posts/ft6.jpg'
import Image7 from '../assets/images/posts/ft7.jpg'
import Image8 from '../assets/images/posts/ft8.jpg'
import NewImage from '../templates/NewImage'
import './custom.css'

const explorer = props =>
    <Grid mt='15px' templateColumns='1fr 1fr 1fr 1fr 1fr' gap="20px">
        <NewImage src={Image1} width='250px' height='250px'/>
        <NewImage src={Image2} width='250px' height='250px'/>
        <NewImage src={Image3} width='250px' height='250px'/>
        <NewImage src={Image4} width='250px' height='250px'/>
        <NewImage src={Image5} width='250px' height='250px'/>
        <NewImage src={Image6} width='250px' height='250px'/>
        <NewImage src={Image7} width='250px' height='250px'/>
        <NewImage src={Image8} width='250px' height='250px'/>
        <NewImage src={Image8} width='250px' height='250px'/>
        <NewImage src={Image8} width='250px' height='250px'/>
    </Grid>

export default explorer

