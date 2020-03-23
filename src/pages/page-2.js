import { red } from "@material-ui/core/colors"
import { Slide } from "material-auto-rotating-carousel"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <Slide
        media={
          <img
            src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
            alt="Test"
          />
        }
        mediaBackgroundStyle={{ backgroundColor: red[400] }}
        title="This is a very cool feature"
        subtitle="Just using this will blow your mind."
      />
    </Layout>
  )
}
