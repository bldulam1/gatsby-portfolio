import Typography from "@material-ui/core/Typography"
import React from "react"

import ColorTool from "../../components/works/color-tool/ColorTool"

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
          <ColorTool />
        </React.Suspense>
      )}
    </>
  )
}
