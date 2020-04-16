import React, { PureComponent } from "react"
import Box from "@material-ui/core/Box"
import { Checkbox, Slider, Tooltip } from "@material-ui/core"

export default class CovidMapControlPanel extends PureComponent {
  render() {
    const {
      startTime,
      endTime,
      onChangeDay,
      allDay,
      onChangeAllDay,
      // selectedTime,
    } = this.props
    const day = 24 * 60 * 60 * 1000
    const days = Math.round((endTime - startTime) / day)

    const _onChangeDay = (_, daysToAdd) => {
      const newTime = startTime + daysToAdd * day
      onChangeDay(newTime)
    }

    // const formatTime = time => {
    //   const date = new Date(time)
    //   return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    // }

    return (
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="center" justifyContent="center">
          <Tooltip title="All Days">
            <Checkbox
              checked={allDay}
              onChange={evt => onChangeAllDay(evt.target.checked)}
              name="allDay"
              color="primary"
            />
          </Tooltip>
        </Box>
        <Box
          display="flex"
          flexDirection="center"
          justifyContent="center"
          flexGrow={1}
          margin="auto"
        >
          <Slider
            disabled={allDay}
            min={1}
            max={days}
            step={1}
            onChange={_onChangeDay}
          />
        </Box>
      </Box>
    )
  }
}
