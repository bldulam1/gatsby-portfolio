import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/styles/makeStyles"
// import PathFinderMain from "../components/works/pathfinding/PathFinder.Main"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorksCard from "../components/works/works-components/Works.Card"

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
          title="Autonomous Visualization System"
          description={`This is a lidar, camera, vehicle CAN data visualization tool
          that can be used for real-time and post data collection.
          I also developed a server-side point cloud extraction tool (from Lidar UDP packets)
          that is used for capturing point cloud data from Velodyne Lidars`}
        />
        <WorksCard
          image={require("../images/react.colors.jpg")}
          link="/works/colors"
          title="Colors Tool"
          description={`This is a Single Page Application originally built using Create React App.
          This is a clone of websites like Flat UI Colors and Material UI Colors.
          It uses the browser's localStorage to store states of components.`}
        />
        <WorksCard image={require("../images/gatsby-astronaut.png")} />
        <WorksCard image={require("../images/gatsby-astronaut.png")} />
      </Box>
    </Layout>
  )
}
