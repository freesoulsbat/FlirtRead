// theme.js
import { extendTheme } from "@chakra-ui/react"

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#faf0f0",
      },
    },
  },
})

export default theme