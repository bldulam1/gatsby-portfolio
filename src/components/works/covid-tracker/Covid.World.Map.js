import React from "react"

import { getGeometry } from "./assets/countries"
import CovidMap from "./Covid.Map"

export default props => {
  const { countries } = props
  let features = []
  if (countries.length) {
    for (let i = 0; i < countries[0].results.length; i++) {
      countries.forEach(({ name, results }) => {
        const { date, confirmed } = results[i]
        const geometry = getGeometry(name)
        if (geometry && confirmed) {
          const timestamp = new Date(date).getTime()

          features.push({
            type: "Feature",
            properties: {
              id: name,
              time: timestamp,
            },
            geometry,
          })
        }
      })
    }
  }
  return <CovidMap features={features} />
}
