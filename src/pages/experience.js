import Box from "@material-ui/core/Box"
import React from "react"

import ExperienceSlides from "../components/experience/Experience.Slides"
import Layout from "../components/layout"
import SEO from "../components/seo"

const jobs = [
  {
    company: "Veoneer Japan",
    companySite: "https://www.veoneer.com/",
    date: "August 2018 - Present",
    image: require("../images/software.jpg"),
    role: "Software Engineer",
    points: [
      "Developed a web application for keeping track of the storage locations of vehicle CAN data recordings in the in-house data center",
      "Developed microservices/REST APIs for feeding the data recordings as input to backend tools like data mining, machine learning based data annotation, KPI analysis Tools",
      "Secured the application using the Microsoft Authentication Library (MSAL).",
      "Deployed the app to more than 100 virtual machines and 10 physical servers",
      "Created a web-based platform for visualizing Lidar, Radar and Camera recordings using Uber’s XVIZ protocol",
      "Communicate and collaborate with multi-disciplinary teams of engineers, project leaders on a daily basis",
    ],
  },
  {
    company: "Koto Electric Co. Ltd.",
    companySite: "https://www.koto-jp.com/en/",
    date: "October 2017 - July 2018",
    image: require("../images/koto.jpg"),
    role: "LED Design and Development Engineer",
    points: [
      "Developed a microcontroller driver for dimming LED lamps",
      "Developed a programmable driver for manipulating display of an RGB LED panel",
      "Coordinated with suppliers from China, Hong Kong",
      "Created LED product documentation",
      "Created assembly and layout drawings of LED lamps",
    ],
  },
  {
    company: "Rokko & Associates (HEXEL)",
    companySite: "https://www.hexelworks.com/",
    date: "July 2015 - October 2017",
    image: require("../images/electrical.jpg"),
    role: "Electrical Engineer",
    points: [
      "Participated in planning the electrical works construction of a 35-floor building in Kokubunji",
      "Used AutoCAD to draft electrical wiring plans. ",
      "Inspected the quality of the wirings done by the subcontractors. ",
    ],
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
