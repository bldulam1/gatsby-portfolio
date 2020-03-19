import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
// import PathFinderMain from "../components/works/pathfinding/PathFinder.Main"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AVSAuto from "../components/works/avs/AVSAuto"
import WorksCard from "../components/works/works-components/Works.Card"
import image from "../images/gatsby-astronaut.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

export default () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Side Projects" />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
      >
        <WorksCard
          image={require("../images/lidarviewer.jpg")}
          link="/works/lidarview"
        />
        <WorksCard image={require("../images/gatsby-astronaut.png")} />
        <WorksCard image={require("../images/gatsby-astronaut.png")} />
        <WorksCard image={require("../images/gatsby-astronaut.png")} />
      </Box>
    </Layout>
  )
}
