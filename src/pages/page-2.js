import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel"
import { blue, green, red } from "@material-ui/core/colors"

import Button from "@material-ui/core/Button"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

export default () => {
  const [state, setState] = React.useState({ open: true })

  return (
    <Layout>
      <SEO title="Page two" />
      <Slide
        media={
          <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
        }
        mediaBackgroundStyle={{ backgroundColor: red[400] }}
        title="This is a very cool feature"
        subtitle="Just using this will blow your mind."
      />
    </Layout>
  )
}
