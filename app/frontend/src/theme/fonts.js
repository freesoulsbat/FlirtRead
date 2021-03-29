import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: 'Open Sans';
            src: url('./components/assets/fonts/OpenSans-Regular.ttf') format(ttf);    
        }
        @font-face {
            font-family: 'Roboto';
            src: url('./components/assets/fonts/Roboto-Medium.ttf') format(ttf);    
        }`}
  />
)