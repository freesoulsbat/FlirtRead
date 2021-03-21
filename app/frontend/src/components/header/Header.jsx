import React from 'react'
import '../styles/header.css'
// import 'bootstrap/dist/css/bootstrap.min.js'

import Brand from './Brand'
import FormHeader from './FormHeader'
import NavHeader from './NavHeader'

const header = props => 
    <header className="header">
        <Brand/>
        <FormHeader/>
        <NavHeader/>
    </header>

export default header