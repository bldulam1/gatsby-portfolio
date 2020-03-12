import Box from "@material-ui/core/Box"
// import PathFinderMain from "../components/works/pathfinding/PathFinder.Main"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Maps from "../components/works/streetscape/Maps"

export default () => {
  return (
    <Layout>
      <SEO title="Works"/>
      <Box height="80vh">
        <Maps/>
      </Box>
    </Layout>
  )
}
