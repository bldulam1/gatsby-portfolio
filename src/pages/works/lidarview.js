import { Typography } from "@material-ui/core"
import React from "react"

// import AVSAuto from "../../components/works/avs/AVSAuto"

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
          Test
        </React.Suspense>
      )}
    </>
  )
}
