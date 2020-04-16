import { Typography } from "@material-ui/core"
import React from "react"

import AVSAuto from "../../components/works/avs/AVSAuto"
import SEO from "../../components/seo"

export default () => {
  const isSSR = typeof window === "undefined"

  return (
    <>
      {!isSSR && (
        <React.Suspense
          fallback={
            <Typography variant="h1" color="primary">
              Loading page
            </Typography>
          }
        >
          <SEO
            title="Autonomous Visualization System"
            description="This is an implementation of Uber's Streetscape.GL and XVIZ packages"
            image={require("../../images/lidarviewer.jpg")}
          />
          <AVSAuto />
        </React.Suspense>
      )}
    </>
  )
}
