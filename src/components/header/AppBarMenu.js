import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Button from "gatsby-theme-material-ui/src/components/button"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme from "@material-ui/core/styles/useTheme"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  headerEmptySpace: {
    offset: theme.mixins.toolbar,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontFamily: "'Source Code Pro', monospace",
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: `none`,
    },
  },
}))

function MenuContents(params) {
  const classes = useStyles()
  const preventDefault = event => event.preventDefault()
  const { isMobile } = params
  return (
    <Box display='flex' flexDirection={isMobile ? "column" : "row"}>
      <Typography className={classes.root}>
        <Link className={classes.link} href="#" onClick={preventDefault}>
          About
        </Link>
        <Link className={classes.link} href="#" onClick={preventDefault}>
          Experience
        </Link>
        <Link className={classes.link} href="#" onClick={preventDefault}>
          Work
        </Link>
        <Link className={classes.link} href="#" onClick={preventDefault}>
          Contact
        </Link>
      </Typography>
      <Button variant='contained' size='small' color='primary'>Resume</Button>
    </Box>
  )
}


export default function() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  return isMobile ? <MenuContents isMobile={isMobile}/> : <IconButton>
    <MenuIcon/>
  </IconButton>

}