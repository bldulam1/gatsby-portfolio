import { Typography } from "@material-ui/core"
import React from "react"

import AVSAuto from "../../components/works/avs/AVSAuto"

export default () => {
  return (
    <React.Suspense
      fallback={
        <Typography variant="h1" color="primary">
          Loading page
        </Typography>
      }
    >
      <AVSAuto />
    </React.Suspense>
  )
}
