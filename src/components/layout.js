import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import theme from "./theme"
import CssBaseline from "@material-ui/core/CssBaseline"
import Hidden from "@material-ui/core/Hidden"
import makeStyles from "@material-ui/core/styles/makeStyles"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100%'
  },
  sideBar: {
    minWidth: theme.spacing(10)
  }
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
        <Box>Appbar</Box>
        <Box display='flex' flexDirection='row' flexGrow={1} >
          <Hidden smDown>
            <Box className={classes.sideBar}>Left</Box>
          </Hidden>
          <Box flexGrow={1} display='flex' flexDirection='column' justifyContent='flex-start'>
            {children}
          </Box>
          <Hidden smDown>
            <Box className={classes.sideBar}>Right</Box>
          </Hidden>
        </Box>
        <Box>
          Footer
        </Box>
        {/*<div className={classes.container}>*/}
        {/*  <Hidden smDown>*/}
        {/*    <aside>*/}
        {/*      Left*/}
        {/*    </aside>*/}
        {/*  </Hidden>*/}
        {/*  <main style={{ flexGrow: 1 }}>{children}</main>*/}
        {/*  <Hidden smDown>*/}
        {/*    <aside>brendon.dulam</aside>*/}
        {/*  </Hidden>*/}
        {/*</div>*/}
      </Box>
      {/*<main>*/}
      {/*  {children}*/}
      {/*</main>*/}
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
