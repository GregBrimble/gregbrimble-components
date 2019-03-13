import { createGlobalStyle } from "styled-components"

import "normalize.css"
import ThemeDefault from "../themes/ThemeDefault"

const GlobalStyle = createGlobalStyle`
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: "Open Sans", sans-serif;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    overscroll-behavior-y: contain;
    background-color: ${props => props.theme.neutral["050"]};
    color: ${props => props.theme.neutral["900"]};
  }
`

GlobalStyle.defaultProps = {
  theme: ThemeDefault,
}

export default GlobalStyle
