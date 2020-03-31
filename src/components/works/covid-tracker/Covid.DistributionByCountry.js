import Box from "@material-ui/core/Box"
import React from "react"

import ChartsPie from "./charts/Charts.Pie"
import { CountriesContext } from "./context/Covid.Context"
import CovidCardTemplate from "./Covid.Card.Template"

export default () => {
  const { countries } = React.useContext(CountriesContext).state
  const infections = []
  const deaths = []
  const recovered = []

  countries.forEach(({ name, mostRecent }) => {
    infections.push({
      name,
      value: mostRecent.confirmed,
    })
    deaths.push({ name, value: mostRecent.deaths })
    recovered.push({ name, value: mostRecent.recovered })
  })

  infections.sort((a, b) => b.value - a.value)
  deaths.sort((a, b) => b.value - a.value)
  recovered.sort((a, b) => b.value - a.value)

  return (
    <CovidCardTemplate title="Distribution by Country">
      <Box flexGrow={1}>
        <ChartsPie
          infections={infections}
          recovered={recovered}
          deaths={deaths}
        />
      </Box>
    </CovidCardTemplate>
  )
}
