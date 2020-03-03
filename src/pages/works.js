import Box from "@material-ui/core/Box"
import Layout from "../components/layout"
import Maps from "../components/works/streetscape/Maps"
import PathFinderMain from "../components/works/pathfinding/PathFinder.Main"
import React from "react"
import SEO from "../components/seo"

export default function about() {
  return (
    <Layout>
      <SEO title="Works"/>
      <Box height="80vh">
        <Maps/>
      </Box>
    </Layout>
  )
}
