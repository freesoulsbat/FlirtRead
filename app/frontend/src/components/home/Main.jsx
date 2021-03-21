import React, { Fragment } from 'react'
import '../styles/main.css'

import PubButtons from './PubButtons'
import PubForm from './PubForm'

const main = props =>
    <Fragment>
        <div className="area">
            <main className="content">
                <PubForm/>
                <PubButtons/>
                {/* <div className="main-content">
                    Oi
                </div> */}
            </main>
            <hr className="divider-main"/>
        </div>
        
    </Fragment>

export default main

