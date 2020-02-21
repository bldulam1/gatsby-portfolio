import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
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

  return (
    <Layout>
      <SEO title="Home" />
      <Box>
        <Typography color="primary" className={classes.greetings} variant="h5">
          Hi, my name is
        </Typography>
        <Typography variant="h1" fontWeight="fontWeightBold">
          <Box fontWeight="fontWeightBold">Brendon Dulam</Box>
        </Typography>
        <Typography variant="h1" color="secondary">
          I build web applications
        </Typography>
        <br />
        <br />
        <Typography color="secondary" variant="h5">
          I'm a software engineer based in Yokohama, Japan specializing in
          building (and occasionally designing) exceptional, high-quality
          websites and applications.
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
