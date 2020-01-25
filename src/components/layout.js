import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import makeStyles from "@material-ui/core/styles/makeStyles"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "./theme"

const useStyles = makeStyles(theme => ({
  layout: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
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
      <div className={classes.layout}>Test</div>
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
