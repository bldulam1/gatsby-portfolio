import React from "react"
import Chart from "./ChartWithVolume"
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper"

export default class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then(data => {
      this.setState({ data })
    })
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>
    }
    console.log(this.state.data)
    return (
      <TypeChooser>
        {type => <Chart type={type} data={this.state.data} />}
      </TypeChooser>
    )
  }
}
