import Box from "@material-ui/core/Box"
import LinearProgress from "@material-ui/core/LinearProgress"
import Typography from "@material-ui/core/Typography"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import withStyles from "@material-ui/styles/withStyles"
import React from "react"

import { numberWithCommas } from "../../../utils/numbers"
import CovidCardTemplate from "./Covid.Card.Template"
import { colors } from "./theme/Covid.Colors"

export default ({ title, total, latest }) => {
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
            {`${numberWithCommas(latest)} latest`}
          </Typography>
        </Box>
      </Box>
      {title === "Recoveries" ? (
        <RecoveredLinearProgress variant="determinate" value={100} />
      ) : title === "Deaths" ? (
        <DeathsLinearProgress variant="determinate" value={100} />
      ) : title === "Infections" ? (
        <InfectionsLinearProgress variant="determinate" value={100} />
      ) : (
        <CriticalLinearProgress variant="determinate" value={100} />
      )}
    </CovidCardTemplate>
  )
}

const InfectionsLinearProgress = withStyles({
  barColorPrimary: {
    backgroundColor: colors.infections,
  },
})(LinearProgress)

const RecoveredLinearProgress = withStyles({
  barColorPrimary: {
    backgroundColor: colors.recovered,
  },
})(LinearProgress)

const DeathsLinearProgress = withStyles({
  barColorPrimary: {
    backgroundColor: colors.deaths,
  },
})(LinearProgress)

const CriticalLinearProgress = withStyles({
  barColorPrimary: {
    backgroundColor: colors.critical,
  },
})(LinearProgress)
