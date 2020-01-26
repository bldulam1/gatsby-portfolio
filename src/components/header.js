import PropTypes from "prop-types"
import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "gatsby-theme-material-ui/src/components/button"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { Box } from "@material-ui/core"

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
    }
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const preventDefault = event => event.preventDefault()
  return (
    <header>
      <Toolbar className={classes.toolbar}>
        <svg width='2.5rem' viewBox="0 0 1885.6 2314.5" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(11715 -17.201)">
            <path fill="#daa520"
                  d="m-10772 154.41-120.39 69.507v265.72l120.39-69.507 712.69 411.47v822.95l-712.69 411.47-712.69-411.47v-822.95l118.46-68.393v-265.72l-348.58 201.25v1088.7l942.81 544.33 942.81-544.33v-1088.7z"/>
            <path fill="#fff"
                  d="m-11011 17.201-236.92 136.79v1363.8l475.77 274.69 475.77-274.69v-549.37l-475.77-274.69-238.85 137.9zm238.85 950.08 238.85 137.9v275.8l-238.85 137.9-238.85-137.9v-275.8z"/>
          </g>
        </svg>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
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
      </Toolbar>
      <div className={classes.headerEmptySpace}/>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
