import React from 'react'

import Header from '../header/Header'
import Main from './Main'
import AsideLeft from './AsideLeft'
import SugestionsAndOthers from './SugestionsAndOthers'

const home = props =>
    <React.Fragment>
        <Header/>
        <AsideLeft/>
        <Main/>
        <SugestionsAndOthers/>
    </React.Fragment>

export default home