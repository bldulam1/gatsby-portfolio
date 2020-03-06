import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyle = makeStyles(theme => ({
  mb2: {
    marginBottom: "2rem",
  },
}))

const IndexPage = () => {
  const classes = useStyle()
  return (
    <Layout>
      <SEO title="Home" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" className={classes.mb2}>
          Get In Touch
        </Typography>
        <Typography variant="body1" className={classes.mb2} align="center">
          Whether for a potential project, or just to say hi, please feel free
          to contact me with any of the links below.
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          href={`mailto: brendondulam06@gmail.com`}
        >
          Get In Touch
        </Button>
      </Box>
    </Layout>
  )
}

export default IndexPage
