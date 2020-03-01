import { MeterWidget, PlaybackControl } from "streetscape.gl"

import React from "react"
import { getXVIZConfig } from "@xviz/parser"

const TIMEFORMAT_SCALE =
  getXVIZConfig().TIMESTAMP_FORMAT === "seconds" ? 1000 : 1

export default ({ log }) => (
  <div id="timeline">
    <MeterWidget
      log={log}
      streamName="/vehicle/acceleration"
      label="Acceleration"
      min={-4}
      max={4}
    />
    <MeterWidget
      log={log}
      streamName="/vehicle/velocity"
      label="Speed"
      getWarning={x => (x > 6 ? "FAST" : "")}
      min={0}
      max={20}
    />
    <PlaybackControl
      width="100%"
      log={log}
      formatTimestamp={x => new Date(x * TIMEFORMAT_SCALE).toUTCString()}
    />
  </div>
)
