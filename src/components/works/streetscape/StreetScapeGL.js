import React, { PureComponent } from "react"

import { getXVIZConfig, setXVIZConfig } from "@xviz/parser"
import {
  LogViewer,
  MeterWidget,
  PlaybackControl,
  StreamSettingsPanel,
  TrafficLightWidget,
  TurnSignalWidget,
  VIEW_MODE,
  XVIZPanel,
} from "streetscape.gl"

import { CAR, MAP_STYLE, MAPBOX_TOKEN, XVIZ_CONFIG, XVIZ_STYLE } from "./constants"
import "./maps.css"

setXVIZConfig(XVIZ_CONFIG)

const TIMEFORMAT_SCALE = getXVIZConfig().TIMESTAMP_FORMAT === "seconds" ? 1000 : 1
const exampleLog = require("./log-from-file").default

class StreetScapeGL extends PureComponent {
  state = {
    log: exampleLog,
    settings: {
      viewMode: "PERSPECTIVE",
      showTooltip: false,
    },
  }

  componentDidMount() {
    this.state.log.on("error", console.error).connect()
  }

  _onSettingsChange = changedSettings => {
    this.setState({
      settings: { ...this.state.settings, ...changedSettings },
    })
  }

  render() {
    const { log, settings } = this.state

    return (
      <div id="container">
        <ControlPanel log={log}/>
        <div id="log-panel">
          <div id="map-view">
            <LogViewer
              log={log}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              mapStyle={MAP_STYLE}
              car={CAR}
              xvizStyles={XVIZ_STYLE}
              showTooltip={settings.showTooltip}
              viewMode={VIEW_MODE[settings.viewMode]}
            />
            <Hud log={log}/>
          </div>
          <div id="timeline">
            <PlaybackControl
              width="100%"
              log={log}
              formatTimestamp={x => new Date(x * TIMEFORMAT_SCALE).toUTCString()}
            />
          </div>
        </div>
      </div>
    )
  }
}

const ControlPanel = ({ log }) => {
  return <div id="control-panel">
    {/*<XVIZPanel log={log} name="Metrics"/>*/}
    {/*<hr/>*/}
    <XVIZPanel log={log} name="Camera"/>
    <hr/>
    {/*<Form*/}
    {/*  data={APP_SETTINGS}*/}
    {/*  values={this.state.settings}*/}
    {/*  onChange={this._onSettingsChange}*/}
    {/*/>*/}
    <StreamSettingsPanel log={log}/>
  </div>

}

const Hud = ({ log }) => {
  return <div id="hud">
    {/*<TurnSignalWidget log={log} streamName="/vehicle/turn_signal"/>*/}
    {/*<hr/>*/}
    {/*<TrafficLightWidget log={log} streamName="/vehicle/traffic_light"/>*/}
    {/*<hr/>*/}
    <MeterWidget
      log={log}
      streamName="/vehicle/acceleration"
      label="Acceleration"
      min={-4}
      max={4}
    />
    <hr/>
    <MeterWidget
      log={log}
      streamName="/vehicle/velocity"
      label="Speed"
      getWarning={x => (x > 6 ? "FAST" : "")}
      min={0}
      max={20}
      />
  </div>

}

export default StreetScapeGL