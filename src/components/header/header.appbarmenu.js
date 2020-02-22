import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme from "@material-ui/core/styles/useTheme"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import MenuIcon from "@material-ui/icons/Menu"
import Button from "gatsby-theme-material-ui/src/components/button"
import React, { useState } from "react"

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
    marginTop: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "3vw",
    fontFamily: fonts.secondary,
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

function MenuContents({ isDesktop }) {
  const classes = useStyles()
  const components = {
    about: "/",
    experience: "/experience",
    work: "/work",
    contact: "/contact",
  }

  return isDesktop ? (
    <Box display="flex" flexDirection="row">
      {Object.keys(components).map(component => (
        <Typography>
          <Link
            key={`link_${component}`}
            className={classes.link}
            href={components[component]}
            variant="h6"
            underline="none"
          >
            {component}
          </Link>
        </Typography>
      ))}
      <Button variant="contained" size="medium" color="primary">
        Resume
      </Button>
    </Box>
  ) : (
    <Box role="presentation" className={classes.drawer}>
      {Object.keys(components).map(component => (
        <Typography className={classes.link}>
          <Link href={components[component]}>{component}</Link>
        </Typography>
      ))}
      <Box display="flex" justifyContent="center" mt="20vh">
        <Button variant="contained" size="small" color="primary">
          Resume
        </Button>
      </Box>
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
