import Box from "@material-ui/core/Box"
import LinearProgress from "@material-ui/core/LinearProgress"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { numberWithCommas } from "../../../utils/numbers"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import CovidCardTemplate from "./Covid.Card.Template"

export default ({ title, total, today }) => {
  return (
    <CovidCardTemplate title={title}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <TrendingUpIcon />
        </Box>
        <Box>
          <Typography variant="h4"> {numberWithCommas(total)} </Typography>
          <Typography variant="h6" align="right">
            {`${numberWithCommas(today)} today`}
          </Typography>
        </Box>
      </Box>
      <LinearProgress variant="determinate" value={100} />
    </CovidCardTemplate>
  )
}
