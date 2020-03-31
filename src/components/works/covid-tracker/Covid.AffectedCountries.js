import { ListItemIcon } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import React from "react"
import { useEffect } from "react"
import ReactCountryFlag from "react-country-flag"
import { areEqual, FixedSizeList } from "react-window"

import { getCountryCode, getGoogleCountryName } from "./assets/countries"
import { CountriesContext } from "./context/Covid.Context"
import CovidCardTemplate from "./Covid.Card.Template"

export default () => {
  const { countries } = React.useContext(CountriesContext).state
  const sortOptions = [
    "Cases(total)",
    "Cases(latest)",
    "Deaths(total)",
    "Deaths(latest)",
    "Recoveries",
  ]

  const [state, setState] = React.useState({
    countryInput: "",
    filteredCountries: [],
    selectedSort: sortOptions[0],
  })

  React.useEffect(() => {
    setState({ ...state, filteredCountries: countries })
  }, [countries])

  const handleCountryInputChange = event => {
    const countryInput = event.target.value
    const filteredCountries = countries.filter(country => {
      const countryName = country.name.toLowerCase()
      const countryInputLower = countryInput.toLowerCase()
      return countryName.includes(countryInputLower)
    })
    setState({ ...state, countryInput, filteredCountries })
  }

  const handleSortOptionChange = event => {
    const selectedSort = event.target.value
    let filteredCountries = state.filteredCountries
    filteredCountries.sort((a, b) => {
      if (selectedSort === sortOptions[0]) {
        return b.mostRecent.confirmed - a.mostRecent.confirmed
      } else if (selectedSort === sortOptions[2]) {
        return b.mostRecent.deaths - a.mostRecent.deaths
      }
      return b.mostRecent.confirmed - a.mostRecent.confirmed
    })
    setState({ ...state, selectedSort, filteredCountries })
  }

  return (
    <CovidCardTemplate
      title={`Affected Countries (${state.filteredCountries.length})`}
    >
      <form autoComplete="off">
        <Grid container spacing={2}>
          <Grid item lg={8} md={6} sm={6} xs={12}>
            <TextField
              id="country-search"
              label="Search country"
              value={state.countryInput}
              onChange={handleCountryInputChange}
              fullWidth
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TextField
              id="sort-by-selection"
              label="sort by"
              value={state.selectedSort}
              onChange={handleSortOptionChange}
              select
              fullWidth
            >
              {sortOptions.map(sortOption => (
                <MenuItem key={`sort-option-${sortOption}`} value={sortOption}>
                  {sortOption}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <FixedSizeList
              height={400}
              itemSize={46}
              itemCount={state.filteredCountries.length}
              itemData={state.filteredCountries}
            >
              {Row}
            </FixedSizeList>
          </Grid>
        </Grid>
      </form>
    </CovidCardTemplate>
  )
}

const Row = React.memo(props => {
  const { index, style, data } = props
  const country = data[index]
  const countryCode = getCountryCode(country.name)
  const countryName = getGoogleCountryName(country.name)

  return (
    <ListItem button style={style} key={index}>
      <ListItemIcon>
        {countryCode ? (
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
          />
        ) : (
          <div>
            {countryName
              .split(" ")
              .map(s => s[0])
              .join("")}
          </div>
        )}
      </ListItemIcon>
      <ListItemText
        primary={country.name || ""}
        secondary={`${country.mostRecent.confirmed} cases | ${country.mostRecent.deaths} deaths`}
      />
    </ListItem>
  )
}, areEqual)
