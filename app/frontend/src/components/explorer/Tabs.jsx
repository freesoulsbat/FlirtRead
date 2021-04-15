import React, { Component } from 'react'
import {Box, Grid } from "@chakra-ui/react"
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import TabExplorer from './TabExplorer'
import TabJorys from './TabJorys'
import TabSugestions from './TabSugestions'
import './custom.css'

export default class Tabs extends Component {

    constructor(props){
        super(props)
        this.isClicked = this.isClicked.bind(this)
    }
    
    isClicked(e){
        switch(e.target.id){
            case 'explorer':
                let explorer = e.target.classList
                explorer.add('active')
                document.getElementById('jorys').classList.remove('active')
                document.getElementById('sugestions').classList.remove('active')
            break
            case 'jorys':
                let jorys = e.target.classList
                jorys.add('active')
                document.getElementById('explorer').classList.remove('active')
                document.getElementById('sugestions').classList.remove('active')
            break
            case 'sugestions':
                let sugestions = e.target.classList
                sugestions.add('active')
                document.getElementById('jorys').classList.remove('active')
                document.getElementById('explorer').classList.remove('active')
            break
            default:
            break
        }          
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Box as='main'>
                        <Grid
                            gridTemplateColumns='22% 50% 28%'
                            gridAutoRows='40px 100vh'
                            gridTemplateAreas="'. tab .' 'content content content'">
                            <Box
                                as='div'
                                gridArea='tab'
                                m='auto'
                                mt='10px'
                                display='flex'
                                flexDirection='row'>
                                <Link to='/explorer' onClick={this.isClicked} >
                                    <Box
                                        id='explorer'
                                        p='10px 15px'
                                        className='active'
                                        fontFamily='Open Sans, sans-serif'
                                        fontWeight='medium'
                                        fontSize='14px'
                                        color='black' 
                                        _focus={{border: 'none'}} >
                                            Publicações
                                    </Box>
                                </Link>
                                <Link to='/jorys' onClick={this.isClicked}>
                                    <Box
                                        id='jorys'
                                        p='10px 15px' 
                                        fontFamily='Open Sans, sans-serif'
                                        fontWeight='medium'
                                        fontSize='14px'
                                        color='black' 
                                        _focus={{border: 'none'}}>
                                            Jorys
                                    </Box>
                                </Link>
                                <Link to='/sugestions' onClick={this.isClicked}>
                                    <Box
                                        id='sugestions'
                                        p='10px 15px' 
                                        fontFamily='Open Sans, sans-serif'
                                        fontWeight='medium'
                                        fontSize='14px'
                                        color='black'
                                        _focus={{border: 'none'}}>
                                        Sugestões
                                    </Box>
                                </Link>
                            </Box>
                            <Box 
                                gridArea='content'
                                display='flex'
                                justifyContent='center'
                                alignItems='flex-start'>

                                <Switch>
                                    <Route path='/explorer'>
                                        <TabExplorer/>
                                    </Route>
                                    <Route path='/jorys'>
                                        <TabJorys/>
                                    </Route>
                                    <Route path='/sugestions'>
                                        <TabSugestions/>
                                    </Route>
                                </Switch>
                                
                            </Box>
                        </Grid>
                    </Box>
                </Router>
            </React.Fragment>
        )
    } 
}


//ABAIXO, TODO O MEU SOFRIMENTO!!!!!!!

// componentDidUpdate(){
//     this.isClicked()
// }

// isClicked () {
//     const path = window.location.pathname
//     const explorer = document.getElementById('explorer')
//     console.log(explorer)
//     const jorys = document.getElementById('jorys')
//     const sugestions = document.getElementById('sugestions')
//     switch(path){
//         case '/explorer':
//             explorer.classList.add('active')
//         break
//         case '/jorys':
//             jorys.classList.add('active')
//         break
//         case '/sugestions':
//             sugestions.classList.add('active')
//         break
//         default:
//         break
//     }
// this.setState((state, props) => ({
//     isclicked: this.isClicked()
// }))
// }

// isClickedExplorer() {
//     this.setState( state => ({explorer: !state.explorer}))
//     this.updateClass()
// }

// isClickedJorys() {
//     this.setState( state => ({jorys: !state.jorys}))
//     this.updateClass()
// }

// isClickedSugestions() {
//     this.setState( state => ({sugestions: !state.sugestions}))
//     this.updateClass()
// }

// updateClass() {
//     const explorer = document.getElementById('explorer')
//     const jorys = document.getElementById('jorys')
//     const sugestions = document.getElementById('sugestions')
//     this.state.explorer ? explorer.classList.add('active') : explorer.classList.remove('active')
//     this.state.jorys ? jorys.classList.add('active') : jorys.classList.remove('active')
//     this.state.sugestions ? sugestions.classList.add('active') : sugestions.classList.remove('active')
// }

// this.state = {
//     explorer: true,
//     jorys: false,
//     sugestions: false
// }

// componentDidMount() {
//     this.isClicked()
// }

// componentWillUnmount() {
//     this.isClicked()
// }

// componentDidUpdate(){
//     this.isClicked()
// }

// shouldComponentUpdate(){
//     this.isClicked()
//     return true
// }