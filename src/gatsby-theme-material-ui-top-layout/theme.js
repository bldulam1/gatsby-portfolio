import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export default createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#0A192F",
    },
    common: {
      black: "#0A192F",
      white: "#fff",
    },
    primary: {
      main: "#daa520",
      light: "#ffd656",
      dark: "#a47700",
    },
    secondary: {
      main: "#a7969b",
      light: "#d9c7cc",
      dark: "#78686d",
    },
  },
})

