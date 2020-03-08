import Box from "@material-ui/core/Box"
import Button from "gatsby-theme-material-ui/src/components/button"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { fonts } from "../components/theme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useTheme from "@material-ui/styles/useTheme"

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
          variant="h5"
        >
          Hi, my name is
        </Typography>
        <Typography
          fontWeight="fontWeightBold"
          variant="h2"
        >
          <Box fontWeight="fontWeightBold">Brendon Dulam</Box>
        </Typography>
        <Typography color="secondary" variant="h2">
          I build web applications
        </Typography>
        <br />
        <br />
        <Typography color="secondary" variant="h5">
          I'm a software engineer based in Yokohama, Japan specializing in
          building (and occasionally designing) exceptional, high-quality web
          applications. I specialize in NodeJS, Python, GO, React, MongoDB, and Serverless (AWS, Netlify) stack.
        </Typography>

        <br />
        <br />
        <div>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href={`mailto: brendondulam06@gmail.com`}
          >
            Get In Touch
          </Button>
        </div>
      </Box>
    </Layout>
  )
}

export default IndexPage
