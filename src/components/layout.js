import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
import makeStyles from "@material-ui/core/styles/makeStyles"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import fonts from "../gatsby-theme-material-ui-top-layout/fonts"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import Header from "./header/header"

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100%",
  },
  sideBar: {
    minWidth: theme.spacing(10),
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    fontFamily: "'Source Code Pro', monospace",
  },
  content: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  email: {
    fontFamily: fonts.secondary,
    textDecoration: "none",
  },
}))

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const email = "brendondulam06@gmail.com"

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        className={classes.container}
      >
        <Header siteTitle="Test" />
        <Box display="flex" flexDirection="row" flexGrow={1} mx={3}>
          <Hidden smDown>
            <Box className={classes.sideBar}></Box>
          </Hidden>
          <Box
            display="flex"
            flexDirection="column"
            flexGrow={1}
            justifyContent="flex-start"
            my="auto"
          >
            <Container maxWidth="lg">{children}</Container>
          </Box>
          <Hidden smDown>
            <Box className={classes.sideBar} m="auto">
              <Link
                href={`mailto: ${email}`}
                color="secondary"
                variant="h6"
                className={classes.email}
              >
                {email}
              </Link>
            </Box>
          </Hidden>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
