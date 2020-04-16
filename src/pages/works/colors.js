import Typography from "@material-ui/core/Typography"
import React from "react"

import SEO from "../../components/seo"
import ColorTool from "../../components/works/color-tool/ColorTool"

export default () => {
  const isSSR = typeof window === "undefined"

  return (
    <>
      <SEO
        title="Color Tool"
        image={require("../../images/react.colors.jpg")}
      />
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
