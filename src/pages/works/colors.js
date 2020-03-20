import React from "react"
import { BrowserRouter } from "react-router-dom"

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
          <BrowserRouter>
            <ColorTool />
          </BrowserRouter>
        </React.Suspense>
      )}
    </>
  )
}
