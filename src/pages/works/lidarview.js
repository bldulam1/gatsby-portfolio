import { Typography } from "@material-ui/core"
import React from "react"

import SEO from "../../components/seo"
import AVSAuto from "../../components/works/avs/AVSAuto"

export default () => {
  const isSSR = typeof window === "undefined"

  return (
    <>
      <SEO
        title="Autonomous Visualization System"
        description="This is an implementation of Uber's Streetscape.GL and XVIZ packages"
        image={require("../../images/lidarviewer.jpg")}
      />
      {!isSSR && (
        <React.Suspense
          fallback={
            <Typography variant="h1" color="primary">
              Loading page
            </Typography>
          }
        >
          <AVSAuto />
        </React.Suspense>
      )}
    </>
  )
}
