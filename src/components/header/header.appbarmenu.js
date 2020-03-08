import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme from "@material-ui/core/styles/useTheme"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "gatsby"
import React, { useState } from "react"

import cvFile from "../../../assets/CV_Brendon.pdf"
import { fonts } from "../theme"

const useStyles = makeStyles(theme => ({
  headerEmptySpace: {
    offset: theme.mixins.toolbar,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textTransform: "uppercase",
    textDecoration: "none",
    marginTop: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "3vw",
    fontFamily: fonts.secondary,
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  drawer: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
}))

const ResumeButton = () => (
  <a style={{ textDecoration: "none" }} href={cvFile}>
    <Button variant="contained" size="medium" color="primary">
      Resume
    </Button>
  </a>
)

function MenuContents({ isDesktop }) {
  const classes = useStyles()
  const components = {
    about: "/",
    experience: "/experience",
    works: "/works",
    contact: "/contact",
  }

  return isDesktop ? (
    <Box display="flex" flexDirection="row">
      {Object.keys(components).map(component => (
        <Link
          key={`link_${component}`}
          className={classes.link}
          to={components[component]}
        >
          <Typography>{component}</Typography>
        </Link>
      ))}
      <ResumeButton />
    </Box>
  ) : (
    <Box role="presentation" className={classes.drawer}>
      {Object.keys(components).map(component => (
        <Typography className={classes.link}>
          <Link href={components[component]}>{component}</Link>
        </Typography>
      ))}
      <ResumeButton />
    </Box>
  )
}

export default function() {
  const theme = useTheme()
  const isDesktop = !useMediaQuery(theme.breakpoints.down("sm"))

  const [state, setState] = useState({
    isDrawerOpen: false,
  })

  const { isDrawerOpen } = state

  const toggleDrawer = () => {
    setState({ isDrawerOpen: !isDrawerOpen })
  }

  return isDesktop ? (
    <MenuContents isDesktop={isDesktop} />
  ) : (
    <IconButton onClick={toggleDrawer}>
      <MenuIcon />
      <SwipeableDrawer
        anchor="right"
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        open={isDrawerOpen}
      >
        <MenuContents isDesktop={isDesktop} />
      </SwipeableDrawer>
    </IconButton>
  )
}
