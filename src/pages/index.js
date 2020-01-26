import React from "react"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "gatsby-theme-material-ui/src/components/button"
import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles"


const useStyle = makeStyles(theme => ({
  greetings: {
    fontFamily: "'Source Code Pro', monospace",
  },
}))

const IndexPage = () => {
  const classes = useStyle()

  return <Layout>
    <SEO title="Home"/>
    <Typography color='primary' className={classes.greetings}>
      Hi, my name is
    </Typography>
    <Typography variant='h2' fontWeight='fontWeightBold'>
      <Box fontWeight='fontWeightBold'>
        Brendon Dulam
      </Box>
    </Typography>
    <Typography variant='h2' color='secondary'>
      I build web applications
    </Typography>

    <br/>
    <br/>
    <Typography color='secondary'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi atque aut blanditiis consequatur debitis
      in inventore ipsam, molestias, pariatur perferendis perspiciatis quasi reprehenderit tenetur vel velit voluptate?
      Dolor, possimus.
    </Typography>

    <br/>
    <br/>
    <div>
      <Button variant='outlined' color='primary' size='large'>
        Get In Touch
      </Button>
    </div>

  </Layout>

}

export default IndexPage
