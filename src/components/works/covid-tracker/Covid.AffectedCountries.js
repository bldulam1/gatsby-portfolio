import Grid from "@material-ui/core/Grid"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import React from "react"
import { FixedSizeList } from "react-window"

import CovidContext from "./context/Covid.Context"
import CovidCardTemplate from "./Covid.Card.Template"

export default () => {
  const { countries } = React.useContext(CovidContext).state
  console.table(countries)

  return (
    <CovidCardTemplate title="Affected Countries">
      <form autoComplete="off">
        <Grid container spacing={2}>
          <Grid item lg={8} md={6} sm={6} xs={12}>
            <TextField id="country-search" label="Search country" fullWidth />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TextField id="sort-by-selection" label="sort by" select fullWidth>
              <MenuItem>Cases(total)</MenuItem>
              <MenuItem>Cases(today)</MenuItem>
              <MenuItem>Deaths(total)</MenuItem>
              <MenuItem>Deaths(today)</MenuItem>
              <MenuItem>Recoveries</MenuItem>
            </TextField>
          </Grid>
          <Grid item lg={12}>
            Countries
            {/* <FixedSizeList height={400}>
          {}
        </FixedSizeList> */}
          </Grid>
        </Grid>
      </form>
    </CovidCardTemplate>
  )
}
