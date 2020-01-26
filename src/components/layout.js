import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import theme from "./theme"
import CssBaseline from "@material-ui/core/CssBaseline"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
import makeStyles from "@material-ui/core/styles/makeStyles"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Box from "@material-ui/core/Box"
import Header from "./header"

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
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box display='flex' flexDirection='column' className={classes.container}>
        <Header/>
        <Box display='flex' flexDirection='row' flexGrow={1} mx={3}>
          <Hidden smDown>
            <Box className={classes.sideBar}>

            </Box>
          </Hidden>
          <Box flexGrow={1} display='flex' flexDirection='column' justifyContent='flex-start'>
            {children}
          </Box>
          <Hidden smDown>
            <Box className={classes.sideBar} m='auto'>
              <Link href="mailto: brendondulam06@gmail.com" color="secondary">
                brendondulam06@gmail.com
              </Link>
            </Box>
          </Hidden>
        </Box>
      </Box>
    </ThemeProvider>

    // <>
    //   <Header siteTitle={data.site.siteMetadata.title}/>
    //   <div className={classes.headerSpace}>
    //     <main>{children}</main>
    //     <footer>
    //       © {new Date().getFullYear()}, Built with {` `}
    //       <a href="https://www.gatsbyjs.org">Gatsby</a>
    //     </footer>
    //   </div>
    // </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
