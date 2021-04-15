import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#faf0f0",
        boxSizing: "border-box"
      },
    },
  },
})

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  , document.getElementById('root'))