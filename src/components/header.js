import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles(theme => (
  {
    header: {
      background: `black`,
      marginBottom: `1.45rem`,
    },
    headerEmptySpace: {
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    },
    link: {
      color: `white`,
      textDecoration: `none`,

    },
  }
))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return <header className={classes.header}>
    <div className={classes.headerEmptySpace}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={classes.link}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
