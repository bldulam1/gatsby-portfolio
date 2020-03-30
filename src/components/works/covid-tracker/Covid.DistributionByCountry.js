import Box from "@material-ui/core/Box"
import React from "react"

import ChartsPie from "./charts/Charts.Pie"
import CovidCardTemplate from "./Covid.Card.Template"

export default () => {
  return (
    <CovidCardTemplate title="Distribution by Country">
      <Box flexGrow={1}>
        <ChartsPie />
      </Box>
    </CovidCardTemplate>
  )
}
