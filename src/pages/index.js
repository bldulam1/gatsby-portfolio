import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useTheme from "@material-ui/styles/useTheme"
import Button from "gatsby-theme-material-ui/src/components/button"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { fonts } from "../components/theme"

const useStyle = makeStyles(theme => ({
  greetings: {
    fontFamily: fonts.secondary,
  },
}))

const IndexPage = () => {
  const classes = useStyle()
  const theme = useTheme()
  const isDesktop = !useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Layout>
      <SEO title="Home" />
      <Box>
        <Typography
          color="primary"
          className={classes.greetings}
          variant={isDesktop ? "h5" : "p"}
        >
          Hi, my name is
        </Typography>
        <Typography
          fontWeight="fontWeightBold"
          variant={isDesktop ? "h1" : "h2"}
        >
          <Box fontWeight="fontWeightBold">Brendon Dulam</Box>
        </Typography>
        <Typography color="secondary" variant={isDesktop ? "h1" : "h2"}>
          I build web applications
        </Typography>
        <br />
        <br />
        <Typography color="secondary" variant={isDesktop ? "h5" : "p"}>
          I'm a software engineer based in Yokohama, Japan specializing in
          building (and occasionally designing) exceptional, high-quality
          web applications.
        </Typography>

        <br />
        <br />
        <div>
          <Button variant="outlined" color="primary" size="large">
            Get In Touch
          </Button>
        </div>
      </Box>
    </Layout>
  )
}

export default IndexPage
