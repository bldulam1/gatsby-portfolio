import Typography from "@material-ui/core/Typography"
import React from "react"

import ColorTool from "../../components/works/color-tool/ColorTool"
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
            title="Color Tool"
            image={require("../../images/react.colors.jpg")}
          />
          <ColorTool />
        </React.Suspense>
      )}
    </>
  )
}
