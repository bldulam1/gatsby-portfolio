import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "@material-ui/core/Box"
import Maps from "../components/works/streetscape/Maps"

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
