import "./maps.css"

import {
  CAR,
  MAPBOX_TOKEN,
  MAP_STYLE,
  XVIZ_CONFIG,
  XVIZ_STYLE,
} from "./constants"
import {
  LogViewer,
  VIEW_MODE,
  XVIZPanel,
} from "streetscape.gl"
import React, { PureComponent } from "react"

import TimeLineView from "./TimeLineView"
import { setXVIZConfig } from "@xviz/parser"

setXVIZConfig(XVIZ_CONFIG)

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
        {/* <ControlPanel log={log}/> */}
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
            <div id="camera-view">
              <XVIZPanel log={log} name="Camera" />
            </div>
            {/* <Hud log={log} /> */}
          </div>
          <TimeLineView log={log} />
        </div>
      </div>
    )
  }
}

// const ControlPanel = ({ log }) => {
//   return (
//     <div id="control-panel">
//       {/*<XVIZPanel log={log} name="Metrics"/>*/}
//       {/*<hr/>*/}
//       {/* <Form
//       data={APP_SETTINGS}
//       values={settings}
//       onChange={_onSettingsChange}
//     /> */}
//       <StreamSettingsPanel log={log} />
//     </div>
//   )
// }

export default StreetScapeGL