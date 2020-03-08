import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import makeStyles from "@material-ui/styles/makeStyles"
import useTheme from "@material-ui/styles/useTheme"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { fonts } from "../components/theme"

library.add(fab, faCheckSquare, faCoffee)

const useStyle = makeStyles(theme => ({
  mb2: {
    marginBottom: "2rem",
    maxWidth: "40rem",
  },
  icon: {
    margin: "2rem",
    color: '#a7969b',
    '&:hover': {
      color: '#daa520',
    }
  },
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          color="primary"
          className={classes.greetings}
          variant={isDesktop ? "h5" : "h6"}
        >
          What's Next?
        </Typography>
        <Typography variant="h3" className={classes.mb2}>
          Get In Touch
        </Typography>
        <Typography
          variant="h6"
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
