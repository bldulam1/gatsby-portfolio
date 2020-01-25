import React from "react"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export default createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#0A192F",
    },
    common:{
      black: '#0A192F',
      white: '#A7969B'
    },
    primary: {
      main: "#E83D87",
      light: "#ff74b7",
      dark: "#b1005a",
    },
    secondary: {
      main: "#a7969b",
      light: "#d9c7cc",
      dark: "#78686d",
    },
  },
})
