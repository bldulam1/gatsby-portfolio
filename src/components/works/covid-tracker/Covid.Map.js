import Box from "@material-ui/core/Box"
import React from "react"
import MapGL from "react-map-gl"

import { MAPBOX_TOKEN } from "../avs/constants"
import CovidCardTemplate from "./Covid.Card.Template"

export default class CovidMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 1,
        bearing: 0,
        pitch: 0,
      },
    }
  }

  render() {
    return (
      <CovidCardTemplate title="Worldwide Infections">
        <Box display="flex" flexGrow={1} height="40vh">
          <MapGL
            {...this.state.viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={viewport => this.setState({ viewport })}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />
        </Box>
      </CovidCardTemplate>
    )
  }
}
