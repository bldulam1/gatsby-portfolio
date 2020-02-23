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

import { Form } from "@streetscape.gl/monochrome"

import { APP_SETTINGS, CAR, MAP_STYLE, MAPBOX_TOKEN, XVIZ_CONFIG, XVIZ_STYLE } from "./constants"

setXVIZConfig(XVIZ_CONFIG)

const TIMEFORMAT_SCALE =
  getXVIZConfig().TIMESTAMP_FORMAT === "seconds" ? 1000 : 1

const exampleLog = require("./log-from-file").default

export default params => {
  return (
    <StreetscapeGL/>
  )
};

const classes = {
  main: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  leftPanel: {
    boxSizing: "border-box",
    width: "320px",
    padding: "12px",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 0 8px rgba(0,0,0,0.3)",
    height: "100",
    overflow: "auto",
  },
  hr: {
    margin: "24px -12px",
    opacity: 0.3,
  },
  rightPanel: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  rightPanelContainer: {
    flexGrow: 1,
    position: "relative",
    maxHeight: "100%",
  },
  mapContainer: {
    position: "absolute",
    top: "12px",
    right: "12px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 8px rgba(0,0,0,0.3)",
  },
  playbackControlContainer: {
    padding: "24px 0",
    position: "relative",
  },
  hudHR: { margin: 0, opacity: 0.3 },
}

class StreetscapeGL extends PureComponent {
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
      <div style={classes.main}>
        <div style={classes.leftPanel}>
          <XVIZPanel log={log} name="Metrics"/>
          <hr style={classes.hr}/>
          <XVIZPanel log={log} name="Camera"/>
          <hr style={classes.hr}/>
          <Form
            data={APP_SETTINGS}
            values={this.state.settings}
            onChange={this._onSettingsChange}
          />
          <StreamSettingsPanel log={log}/>
        </div>
        <div style={classes.rightPanel}>
          <div style={classes.rightPanelContainer}>
            <LogViewer
              log={log}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              mapStyle={MAP_STYLE}
              car={CAR}
              xvizStyles={XVIZ_STYLE}
              showTooltip={settings.showTooltip}
              viewMode={VIEW_MODE[settings.viewMode]}
            />
            <div style={classes.mapContainer}>
              <TurnSignalWidget log={log} streamName="/vehicle/turn_signal"/>
              <hr style={classes.hudHR}/>
              <TrafficLightWidget
                log={log}
                streamName="/vehicle/traffic_light"
              />
              <hr style={classes.hudHR}/>
              <MeterWidget
                log={log}
                streamName="/vehicle/acceleration"
                label="Acceleration"
                min={-4}
                max={4}
              />
              <hr style={classes.hudHR}/>
              <MeterWidget
                log={log}
                streamName="/vehicle/velocity"
                label="Speed"
                getWarning={x => (x > 6 ? "FAST" : "")}
                min={0}
                max={20}
              />
            </div>
          </div>
          <div style={classes.playbackControlContainer}>
            <PlaybackControl
              width="100%"
              log={log}
              formatTimestamp={x =>
                new Date(x * TIMEFORMAT_SCALE).toUTCString()
              }
            />
          </div>
        </div>
      </div>
    )
  }
}
