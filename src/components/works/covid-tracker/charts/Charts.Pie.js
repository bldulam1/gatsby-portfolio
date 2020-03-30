import React, { PureComponent } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts"

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
]
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
]

export default class ChartsPie extends PureComponent {
  state = {
    height: 300,
    endAngle: -180,
    startAngle: 90,
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height={this.state.height}>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            outerRadius={60}
            fill="#8884d8"
            startAngle={this.state.startAngle}
            endAngle={this.state.endAngle}
          />
          <Pie
            data={data02}
            dataKey="value"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
            startAngle={this.state.startAngle}
            endAngle={this.state.endAngle}
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
