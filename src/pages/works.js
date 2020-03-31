import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorksCard from "../components/works/works-components/Works.Card"
import fonts from "../gatsby-theme-material-ui-top-layout/fonts"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: fonts.secondary,
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.light,
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Side Projects" />
      <Typography
        className={classes.title}
        component="h6"
        variant="h6"
        align="center"
      >
        My side projects
      </Typography>

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
          title="Color Tool"
          description={`This is a Single Page Application originally built using Create React App.
          It is a clone of websites like Flat UI Colors and Material UI Colors.
          It stores the states of components in the browser's localStorage.`}
        />
        <WorksCard
          image={require("../images/covid.jpg")}
          link="/works/covid-tracker"
          title="Covid Tracker"
          description={`This is a Covid-19 Virus Tracker. It uses an Apollo Client to fetch data from this GraphQL API endpoint: https://covid19-graphql.now.sh/.
          The accuracy of this application is dependent from its source API. The chart libary used here is from recharts.`}
        />
        <WorksCard
          disabled={true}
          image={require("../images/trading.jpg")}
          link="/works/tradingsimulator"
          title="Trading Simulator"
          description={`This is an ongoing project, it is a trading simulation for testing trading strategies.
          The objective of this application is to simulate a trade without using actual money.
          The assumption for this game is that the action that a user makes does not affect the market significantly as a whole.`}
        />
        <WorksCard
          disabled={true}
          image={require("../images/maze.jpg")}
          link="/works/pathfinding"
          title="Path Finding Algorithm"
          description={`This is an ongoing project, it is an implementation of the A* algorithm in React.
          I was inspired to create this project after watching the Micromouse Challenge.
          The path that it finds is not yet optimized, also I am still improving the Maze builder feature.`}
        />
      </Box>
    </Layout>
  )
}
