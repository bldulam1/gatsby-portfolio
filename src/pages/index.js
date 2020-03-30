import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Button from "gatsby-theme-material-ui/src/components/button"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import fonts from "../gatsby-theme-material-ui-top-layout/fonts"

const useStyle = makeStyles(theme => ({
  greetings: {
    color: theme.palette.primary.light,
    fontFamily: fonts.secondary,
  },
}))

const IndexPage = () => {
  const classes = useStyle()

  return (
    <Layout>
      <SEO title="Home" />
      <Box
        maxWidth="50rem"
        display="flex"
        margin="auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography className={classes.greetings} variant="h6" align="center">
          Hi, my name is
        </Typography>
        <Typography fontWeight="fontWeightBold" variant="h2" align="center">
          <Box>Brendon Dulam</Box>
        </Typography>
        <Typography color="secondary" variant="h2" align="center">
          Web Developer
        </Typography>
        <br />
        <br />
        <Typography
          variant="subtitle1"
          color="textSecondary"
          align="center"
          style={{ fontFamily: fonts.secondary }}
        >
          I'm a software engineer based in Yokohama Japan, specializing in
          building exceptional, high-quality web applications. I specialize in
          NodeJS, Python, GO, React, MongoDB, and Serverless (AWS, Netlify)
          applications.
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
