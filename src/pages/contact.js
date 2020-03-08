import Box from "@material-ui/core/Box"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import { fab } from "@fortawesome/free-brands-svg-icons"
import fonts from "../gatsby-theme-material-ui-top-layout/fonts"
import { library } from "@fortawesome/fontawesome-svg-core"
import { makeStyles } from "@material-ui/core"
import theme from "../gatsby-theme-material-ui-top-layout/theme"

library.add(fab)

const useStyle = makeStyles(() => ({
  mb2: {
    marginBottom: "2rem",
    maxWidth: "40rem",
  },
  icon: {
    margin: "2rem",
    color: theme.palette.secondary.light,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  greetings: {
    fontFamily: fonts.secondary,
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
        <Typography color="primary" className={classes.greetings} variant="h6">
          What's Next?
        </Typography>
        <Typography variant="h3" className={classes.mb2}>
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          className={classes.mb2}
          align="center"
          color="secondary"
        >
          Whether for a potential project, or just to say hi, please feel free
          to contact me with any of the links below.
        </Typography>

        <div>
          <a
            href="https://github.com/bldulam1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={classes.icon}
              size="4x"
              icon={["fab", "github"]}
            />
          </a>
          <a href={`mailto: brendondulam06@gmail.com`}>
            <FontAwesomeIcon
              className={classes.icon}
              size="4x"
              icon={["fab", "google"]}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bldulam1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={classes.icon}
              size="4x"
              icon={["fab", "linkedin-in"]}
            />
          </a>
        </div>
      </Box>
    </Layout>
  )
}

export default IndexPage
