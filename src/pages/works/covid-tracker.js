import { Box, Container, Grid, Paper } from "@material-ui/core"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CovidCardType1 from "../../components/works/covid-tracker/Covid.CardType1"
import CovidAffectedCountries from "../../components/works/covid-tracker/Covid.AffectedCountries"

export default () => {
  return (
    <Layout>
      <SEO title="Covid Tracker" />
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <CovidCardType1 title="Infections" total={1234} today={0} />
        </Grid>
        <Grid item lg={3}>
          <CovidCardType1 title="Deaths" total={5678} today={0} />
        </Grid>
        <Grid item lg={3}>
          <CovidCardType1 title="Recoveries" total={1512} today={0} />
        </Grid>
        <Grid item lg={3}>
          <CovidCardType1 title="Critical" total={981234} today={0} />
        </Grid>
        <Grid item lg={4}>
          <CovidAffectedCountries />
        </Grid>
        <Grid item lg={8}>
          Worldwide Infections
        </Grid>
      </Grid>
    </Layout>
  )
}
