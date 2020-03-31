import Box from "@material-ui/core/Box"
import React, { PureComponent } from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { CountriesContext } from "./context/Covid.Context"
import CovidCardTemplate from "./Covid.Card.Template"
import { colors } from "./theme/Covid.Colors"

class LineChartHistory extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    const { data } = this.props
    const strokeWidth = 2
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="infections"
            stroke={colors.infections}
            strokeWidth={strokeWidth}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="deaths"
            stroke={colors.deaths}
            strokeWidth={strokeWidth}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="recovered"
            stroke={colors.recovered}
            strokeWidth={strokeWidth}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default () => {
  const { countries } = React.useContext(CountriesContext).state
  let data = []

  if (countries.length) {
    const resLen = countries[0].results.length
    if (resLen) {
      for (let i = 0; i < resLen; i++) {
        let entry = {
          date: null,
          recovered: 0,
          deaths: 0,
          infections: 0,
        }
        countries.forEach(country => {
          const { date, confirmed, recovered, deaths } = country.results[i]
          if (!entry.date) {
            entry.date = date
          }
          if (confirmed > 0) {
            entry.infections += confirmed
          }
          if (recovered > 0) {
            entry.recovered += recovered
          }
          if (deaths > 0) {
            entry.deaths += deaths
          }
        })

        data.push(entry)
      }
    }
  }

  return (
    <CovidCardTemplate title="Infection History">
      <Box flexGrow={1}>
        <LineChartHistory data={data} />
      </Box>
    </CovidCardTemplate>
  )
}
