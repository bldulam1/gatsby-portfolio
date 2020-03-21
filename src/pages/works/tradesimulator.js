import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TradeSimulator from "../../components/works/finance/TradeSimulator"

export default () => {
  return (
    <Layout>
      <SEO title="Financial Trading tool" />
      <TradeSimulator />
    </Layout>
  )
}
