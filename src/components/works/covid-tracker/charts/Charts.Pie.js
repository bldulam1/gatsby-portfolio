import React, { PureComponent } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from "recharts"

import { colors } from "../theme/Covid.Colors"

export default class ChartsPie extends PureComponent {
  state = {
    height: 300,
    endAngle: 90,
    startAngle: 90 + 360,
  }

  props = {
    recovered: [],
    infections: [],
    deaths: []
  }

  render() {
    const maxRadius = this.state.height * 0.4
    const gap = maxRadius * 0.05
    const width = maxRadius / 3 - gap
    const { recovered, infections, deaths } = this.props
    return (
      <ResponsiveContainer width="100%" height={this.state.height}>
        <PieChart>
          <Tooltip cursor={true} />
          <Pie
            data={recovered}
            dataKey="value"
            outerRadius={width}
            fill={colors.recovered}
            startAngle={this.state.startAngle}
            endAngle={this.state.endAngle}
          />
          <Pie
            data={deaths}
            dataKey="value"
            innerRadius={width + gap}
            outerRadius={2 * width + gap}
            fill={colors.deaths}
            startAngle={this.state.startAngle}
            endAngle={this.state.endAngle}
          />
          <Pie
            data={infections}
            dataKey="value"
            innerRadius={2 * (width + gap)}
            outerRadius={maxRadius}
            fill={colors.infections}
            startAngle={this.state.startAngle}
            endAngle={this.state.endAngle}
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
