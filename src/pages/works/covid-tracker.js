import Grid from "@material-ui/core/Grid"
import ApolloClient, { gql } from "apollo-boost"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { CountriesContext } from "../../components/works/covid-tracker/context/Covid.Context"
import CovidAffectedCountries from "../../components/works/covid-tracker/Covid.AffectedCountries"
import CovidCardType1 from "../../components/works/covid-tracker/Covid.CardType1"
import CovidDistributionByCountry from "../../components/works/covid-tracker/Covid.DistributionByCountry"
import CovidMap from "../../components/works/covid-tracker/Covid.Map"
import CovidTimeline from "../../components/works/covid-tracker/Covid.Timeline"

const client = new ApolloClient({
  uri: "https://covid19-graphql.now.sh/",
})

export default () => {
  const [state, setState] = React.useState({
    confirmed: { total: 0, latest: 0 },
    deaths: { total: 0, latest: 0 },
    recovered: { total: 0, latest: 0 },
    critical: { total: 0, latest: 0 },
    countries: [],
  })

  React.useEffect(() => {
    state.countries.length === 0 &&
      client
        .query({
          query: gql`
            query {
              countries(names: []) {
                name
                mostRecent {
                  confirmed
                  deaths
                  recovered
                  growthRate
                }
                results {
                  date
                  confirmed
                  recovered
                  deaths
                }
              }
            }
          `,
        })
        .then(value => {
          const { countries } = value.data
          let confirmed = { latest: 0, total: 0 }
          let deaths = { latest: 0, total: 0 }
          let recovered = { latest: 0, total: 0 }

          countries.forEach(country => {
            const rLen = country.results.length
            const last1 = country.results[rLen - 1]
            const last2 = country.results[rLen - 2]

            confirmed.total += country.mostRecent.confirmed
            confirmed.latest += last1.confirmed - last2.confirmed
            recovered.total += country.mostRecent.recovered
            recovered.latest += last1.recovered - last2.recovered
            deaths.total += country.mostRecent.deaths
            deaths.latest += last1.deaths - last2.deaths
          })

          setState({
            ...state,
            confirmed,
            deaths,
            recovered,
            countries,
          })
        })
  }, [state])

  return (
    <Layout>
      <SEO title="Covid Tracker" />
      <CountriesContext.Provider value={{ state, setState }}>
        <Grid container spacing={2}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <CovidCardType1
              title="Infections"
              total={state.confirmed.total}
              latest={state.confirmed.latest}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <CovidCardType1
              title="Deaths"
              total={state.deaths.total}
              latest={state.deaths.latest}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <CovidCardType1
              title="Recoveries"
              total={state.recovered.total}
              latest={state.recovered.latest}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <CovidCardType1
              title="Critical"
              total={state.critical.total}
              latest={state.critical.latest}
            />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <CovidAffectedCountries />
          </Grid>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <CovidMap />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CovidDistributionByCountry />
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <CovidTimeline />
          </Grid>
        </Grid>
      </CountriesContext.Provider>
    </Layout>
  )
}
