import React, { PureComponent } from "react"

export default class CovidMapControlPanel extends PureComponent {
  render() {
    const {
      startTime,
      endTime,
      onChangeDay,
      allDay,
      onChangeAllDay,
      selectedTime,
    } = this.props
    const day = 24 * 60 * 60 * 1000
    const days = Math.round((endTime - startTime) / day)

    const _onChangeDay = evt => {
      const daysToAdd = evt.target.value
      // add selected days to start time to calculate new time
      const newTime = startTime + daysToAdd * day
      onChangeDay(newTime)
    }

    const formatTime = time => {
      const date = new Date(time)
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    return (
      <div className="control-panel">
        <div className="input">
          <label>All Days</label>
          <input
            type="checkbox"
            name="allday"
            checked={allDay}
            onChange={evt => onChangeAllDay(evt.target.checked)}
          />
        </div>
        <div className={`input ${allDay ? "disabled" : ""}`}>
          <label>Each Day: {formatTime(selectedTime)}</label>
          <input
            type="range"
            disabled={allDay}
            min={1}
            max={days}
            step={1}
            onChange={_onChangeDay}
          />
        </div>
      </div>
    )
  }
}
