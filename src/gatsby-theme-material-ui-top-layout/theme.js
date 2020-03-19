import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

export default createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#1B2B34",
      default: "#0F1C24",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#daa520",
      light: "#ffd656",
      dark: "#a47700",
    },
    secondary: {
      main: "#49888b",
      light: "#79b8bb",
      dark: "#155b5e",
    },
  },
})
