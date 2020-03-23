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
      "Developed an in-house web application for keeping track of the storage locations of vehicle CAN data recordings in the in-house data center. Deployed the app to more than 100 virtual machines and 10 physical servers. Secured the application using the Microsoft Authentication Library (MSAL) to keep track of user activities in the app.",
      "Developed microservices using RESTful and GraphQL APIs for feeding the data recordings as input to backend tools like data mining, machine learning based annotation tool, and KPI analysis Tools",
      "Used NodeJS, Python, Golang for the backend and React for the Frontend, Docker for containerizing microservices, and Gitlab CI/CD",
      "Created a web-based platform for visualizing Lidar, Radar and Camera recordings using Uber’s XVIZ protocol",
      "Developed a Machine-Learning based annotation tool for labelling videos. Used Python's MaskRCNN and MS COCO",
      // "Communicate and collaborate with multi-disciplinary teams of engineers, project leaders on a daily basis",
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
      "Coordinated with suppliers from China, Hong Kong for LED product development",
      "Created LED product documentation",
      "Created assembly and layout drawings of LED lamps",
      "Used NodeJS for IoT applications in remote controlling LED lamps.",
    ],
  },
  {
    company: "Rokko & Associates (HEXEL)",
    companySite: "https://www.hexelworks.com/",
    date: "July 2015 - October 2017",
    image: require("../images/electrical.jpg"),
    role: "Electrical Engineer",
    points: [
      "Participated in planning the electrical works construction of a 35-floor building in Kokubunji, Tokyo",
      "Used AutoCAD to draft electrical wiring plans.",
      "Supervised in the implementation of the electrical plan of the project.",
      "Inspected the quality of the wirings subcontracted by electricians.",
    ],
  },
  {
    company: "University of the Philippines",
    companySite: "https://www.up.edu.ph/",
    date: "June 2008 - June 2015",
    image: require("../images/electronics.jpg"),
    role: "Electronics and Communications Engineering Student",
    points: [
      "Graduated cum laude with CWA of 1.53 (1.00 highest)",
      "Designed and developed a 1.5KV low power DC-DC flyback converter used for leakage testing of battery separators",
      "Developed a TRIAC based Incandescent lamp dimmer",
      "Designed and developed a PIC32-based data logger for temperature, humidity, and light intensity. The data is stored in an external EEPROM and visualized using an LCD display, accepting user input using numeric keypad",
    ],
  },
]

export default function() {
  return (
    <Layout>
      <SEO title="Background" />
      <ExperienceSlides jobs={jobs} />
    </Layout>
  )
}
