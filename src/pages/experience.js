import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import React from "react"

import experience from "../components/data/experience"
import Work from "../components/experience/Experience.Work"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import { fonts } from "../components/theme"

// const useStyle = makeStyles(theme => ({
//   greetings: {
//     fontFamily: fonts.secondary,
//   },
// }))

export default function() {
  // const theme = useTheme()
  // const classes = useStyle()
  // const isDesktop = !useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Layout>
      <SEO title="Experience" />
      <Box>
        <Typography variant="h4">Work Experience</Typography>
        {experience.experiences.map((exp, index) => (
          <Work key={`experience-${index}`} experience={exp} />
        ))}
      </Box>
    </Layout>
  )
}
