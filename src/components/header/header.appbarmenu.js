import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import useTheme from "@material-ui/core/styles/useTheme"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/styles"
import { Link } from "gatsby"
import React, { useState } from "react"
import uuid from "uuid"

import cvFile from "../../../assets/Res_Brendon.pdf"
import fonts from "../../gatsby-theme-material-ui-top-layout/fonts"

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
    marginRight: "3vw",
    fontFamily: fonts.secondary,
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  drawerLink: {
    textTransform: "uppercase",
    textDecoration: "none",
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  SwipeableDrawer: {
    background: "#333f58",
  },
  drawer: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
}))

function MenuContents({ isDesktop }) {
  const classes = useStyles()
  const components = {
    about: "/",
    experience: "/experience",
    works: "/works",
    contact: "/contact",
  }

  const ResumeButton = () => (
    <a style={{ textDecoration: "none" }} href={cvFile}>
      <Button variant="contained" size="medium" color="primary">
        Resume
      </Button>
    </a>
  )

  return isDesktop ? (
    <Box display="flex" flexDirection="row" alignItems="center">
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
    <Box className={classes.drawer}>
      {Object.keys(components).map(component => (
        <Link
          key={uuid()}
          to={components[component]}
          className={classes.drawerLink}
        >
          <Typography>{component} </Typography>
        </Link>
      ))}
      <br />
      <ResumeButton />
    </Box>
  )
}

export default function() {
  const theme = useTheme()
  const isDesktop = !useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()

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
        classes={{ paper: classes.SwipeableDrawer }}
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
