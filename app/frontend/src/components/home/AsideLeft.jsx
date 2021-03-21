import React from 'react'
import '../styles/asideleft.css'
import MenuAsideLeft from './MenuAsideLeft'

const leftside = props =>
    <div className="wrapper-asideleft">
        <MenuAsideLeft/>
        <hr className="divider"/>
    </div>

export default leftside