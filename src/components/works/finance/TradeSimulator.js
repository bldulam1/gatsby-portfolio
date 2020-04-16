import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import React from "react"

import Chart from "./Chart"
import { getData } from "./utils"

export default class ChartComponent extends React.Component {
  componentDidMount() {
    const subscribe = {
      type: "subscribe",
      channels: [{ name: "ticker", product_ids: ["BTC-USD"] }],
    }

    this.ws = new WebSocket("wss://ws-feed.gdax.com")

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe))
    }

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data)
      if (value.type !== "ticker") {
        return
      }

      // const newData = {
      //   date: new Date(value.time),
      //   open: value.open_24h,
      //   high: value.high_24h,
      //   low: value.low_24h,
      //   close: value.price,
      //   volume: value.volume_30d,
      // }
    }

    getData().then(data => {
      // console.log(data.length)
      this.setState({ data })
    })
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    if (this.state == null) {
      return <div>Loading...</div>
    }

    return (
      <>
        <Paper style={{ background: "#eee" }}>
          <Chart type="hybrid" data={this.state.data} />
        </Paper>
        <Box marginTop="2rem">
          <Button variant="contained" color="primary">
            Buy
          </Button>
          <Button variant="contained" color="secondary">
            Sell
          </Button>
        </Box>
      </>
    )
  }
}
