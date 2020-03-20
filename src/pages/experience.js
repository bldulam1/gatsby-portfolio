import Box from "@material-ui/core/Box"
import React from "react"

import ExperienceSlides from "../components/experience/Experience.Slides"
import Layout from "../components/layout"
import SEO from "../components/seo"

const jobs = [
  {
    company: "Rokko & Associates (HEXEL)",
    companySite: "https://www.hexelworks.com/",
    location: "Minato, Tokyo",
    image: require("../images/electrical.jpg"),
    role: "Electrical Engineer",
  },
  {
    company: "Koto Electric Co. Ltd.",
    companySite: "https://www.koto-jp.com/en/",
    location: "Taito, Tokyo",
    image: require("../images/electronics.jpg"),
    role: "LED Design and Development Engineer",
  },
  {
    company: "Veoneer Japan",
    companySite: "https://www.veoneer.com/",
    location: "Yokohama, Kanagawa",
    image: require("../images/software.jpg"),
    role: "Software Engineer",
  },
]

export default function() {
  return (
    <Layout>
      <SEO title="Experience" />
      <ExperienceSlides jobs={jobs} />
    </Layout>
  )
}
