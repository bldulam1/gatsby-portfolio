import { Box, Container, Grid, Paper } from "@material-ui/core"
import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CovidAffectedCountries from "../../components/works/covid-tracker/Covid.AffectedCountries"
import CovidCardType1 from "../../components/works/covid-tracker/Covid.CardType1"
import CovidMap from "../../components/works/covid-tracker/Covid.Map"

export default () => {
  return (
    <Layout>
      <SEO title="Covid Tracker" />
      <Grid container spacing={2}>
        <Grid item lg={3} md={6} sm={6} xs={6}>
          <CovidCardType1 title="Infections" total={1234} today={0} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6}>
          <CovidCardType1 title="Deaths" total={5678} today={0} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6}>
          <CovidCardType1 title="Recoveries" total={1512} today={0} />
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6}>
          <CovidCardType1 title="Critical" total={981234} today={0} />
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <CovidAffectedCountries />
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <CovidMap />
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          Infection Distribution By country
        </Grid>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          Infections History
        </Grid>
      </Grid>
    </Layout>
  )
}
