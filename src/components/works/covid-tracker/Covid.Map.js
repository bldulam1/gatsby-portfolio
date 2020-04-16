import Box from "@material-ui/core/Box"
import React from "react"
import MapGL, { Layer, Source } from "react-map-gl"

import { MAPBOX_TOKEN } from "../avs/constants"
import CovidCardTemplate from "./Covid.Card.Template"
import CovidMapControlPanel from "./Covid.Map.ControlPanel"
import { heatmapLayer } from "./theme/map-style.js"

function filterFeaturesByDay(featureCollection, time) {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const features = featureCollection.features.filter(feature => {
    const featureDate = new Date(feature.properties.time)
    return (
      featureDate.getFullYear() === year &&
      featureDate.getMonth() === month &&
      featureDate.getDate() === day
    )
  })
  return { type: "FeatureCollection", features }
}
export default class CovidMap extends React.Component {
  constructor(props) {
    super(props)
    const current = new Date().getTime()

    this.state = {
      viewport: {
        latitude: 40,
        longitude: -100,
        zoom: 1,
        bearing: 0,
        pitch: 0,
      },
      allDay: true,
      startTime: current,
      endTime: current,
      selectedTime: current,
      earthquakes: null,
      initialized: false,
    }
    this._handleChangeDay = this._handleChangeDay.bind(this)
    this._handleChangeAllDay = this._handleChangeAllDay.bind(this)
  }

  componentDidMount() {}

  componentDidUpdate() {
    const { features } = this.props

    if (!this.state.initialized && features.length) {
      const startTime = features[0].properties.time
      const endTime = features[features.length - 1].properties.time
      const response = {
        type: "FeatureCollection",
        features: this.props.features,
      }
      this.setState({
        data: response,
        earthquakes: response,
        startTime,
        endTime,
        selectedTime: endTime,
        initialized: true,
      })
    }
  }

  _onViewportChange = viewport => this.setState({ viewport })

  _handleChangeDay = time => {
    this.setState({ selectedTime: time })
    if (this.state.earthquakes) {
      this.setState({ data: filterFeaturesByDay(this.state.earthquakes, time) })
    }
  }

  _handleChangeAllDay = allDay => {
    this.setState({ allDay })
    if (this.state.earthquakes) {
      this.setState({
        data: allDay
          ? this.state.earthquakes
          : filterFeaturesByDay(
              this.state.earthquakes,
              this.state.selectedTime
            ),
      })
    }
  }

  render() {
    const {
      viewport,
      data,
      allDay,
      selectedTime,
      startTime,
      endTime,
    } = this.state

    return (
      <CovidCardTemplate title="Worldwide Infections">
        <Box display="flex" flexGrow={1} flexDirection="column" height="50vh">
          <MapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            {data && (
              <Source type="geojson" data={data}>
                <Layer {...heatmapLayer} />
              </Source>
            )}
          </MapGL>
          <CovidMapControlPanel
            containerComponent={this.props.containerComponent}
            startTime={startTime}
            endTime={endTime}
            selectedTime={selectedTime}
            allDay={allDay}
            onChangeDay={this._handleChangeDay}
            onChangeAllDay={this._handleChangeAllDay}
          />
        </Box>
      </CovidCardTemplate>
    )
  }
}
