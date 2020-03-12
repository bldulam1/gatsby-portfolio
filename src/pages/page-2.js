import { Slide } from "material-auto-rotating-carousel"
import { red } from "@material-ui/core/colors"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

export default () => {
  const [state, setState] = React.useState({
    open: false,
  })
  return (
    <Layout>
      <SEO title="Page two"/>
      <Slide
        media={
          <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"/>
        }
        mediaBackgroundStyle={{ backgroundColor: red[400] }}
        title="This is a very cool feature"
        subtitle="Just using this will blow your mind."
      />
    </Layout>
  )
}
