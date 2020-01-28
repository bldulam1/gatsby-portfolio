import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Button from "gatsby-theme-material-ui/src/components/button"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme from "@material-ui/core/styles/useTheme"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"

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
    marginRight: "auto",
    fontFamily: "'Source Code Pro', monospace",
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: `none`,
    },
  },
  drawer: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
}))

function MenuContents(params) {
  const classes = useStyles()
  const { isMobile } = params
  const components = {
    about: "/",
    experience: "/experience",
    work: "/work",
    contact: "/contact",
  }

  return isMobile
    ? <Box display='flex' flexDirection='row' >
      {
        Object.keys(components).map(component => (
          <Typography>
            <Link key={`link_${component}`} className={classes.link} href={components[component]}
                  style={{ marginRight: "3vw" }}>
              {component}
            </Link>
          </Typography>
        ))
      }
      <Button variant='contained' size='small' color='primary'>Resume</Button>
    </Box>
    : <Box role='presentation' className={classes.drawer}>
      {Object.keys(components).map(component => (
        <Typography className={classes.link}>
          <Link href={components[component]}>
            {component}
          </Link>
        </Typography>
      ))}
      <Box display='flex' justifyContent='center' mt='20vh'>
        <Button variant='contained' size='small' color='primary'>Resume</Button>
      </Box>
    </Box>


}


export default function() {
  const theme = useTheme()
  const isMobile = !useMediaQuery(theme.breakpoints.down("sm"))

  const [state, setState] = useState({
    isDrawerOpen: false,
  })

  const { isDrawerOpen } = state

  const toggleDrawer = () => {
    setState({ isDrawerOpen: !isDrawerOpen })
  }

  return isMobile ? <MenuContents isMobile={isMobile}/> : <IconButton onClick={toggleDrawer}>
    <MenuIcon/>
    <SwipeableDrawer
      anchor="right"
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      open={isDrawerOpen}>
      <MenuContents isMobile={isMobile}/>
    </SwipeableDrawer>
  </IconButton>
}