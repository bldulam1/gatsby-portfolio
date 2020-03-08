import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import React from "react"

function getYearAndMonth(dateTime) {
  dateTime = new Date(dateTime)
  return {
    month: dateTime.getUTCMonth(),
    year: dateTime.getUTCFullYear(),
  }
}

const Work = params => {
  const {
    date,
    position,
    company,
    summary,
    projects,
    bullets,
  } = params.experience

  const startDate = getYearAndMonth(date.start)
  const endDate = getYearAndMonth(date.end)

  return (
    <Box>
      <Box>
        <Typography variant="h6">{`${startDate.month}/${startDate.year} to ${endDate.month}/${endDate.year}`}</Typography>
        <Typography variant="h5" color="primary">
          {position}, {company}
        </Typography>
        <Typography variant="body1">{summary}</Typography>
      </Box>
      <Box marginTop="1.5rem" marginLeft="1.5rem">
        {bullets && bullets.length && <Bullets bullets={bullets} />}
        {projects &&
          projects.length &&
          projects.map(({ name, date, bullets }, index) => {
            const pStartDate = getYearAndMonth(date.start)
            const pEndDate = getYearAndMonth(date.end)

            return (
              <div key={`project-${index}`}>
                <Typography variant="h6" color="secondary">
                  {name}
                </Typography>
                <Typography variant="body2">{`${pStartDate.month}/${pStartDate.year} to ${pEndDate.month}/${pEndDate.year}`}</Typography>
                <Bullets bullets={bullets} />
              </div>
            )
          })}
      </Box>
    </Box>
  )
}

function Bullets({ bullets }) {
  return (
    <ul>
      {bullets.map((bullet, index) => (
        <li key={`work-bullet-${index}`}>
          <Typography>{bullet}</Typography>
        </li>
      ))}
    </ul>
  )
}

// const WorkProject =

// Work.propTypes = {
//   date: PropTypes.any,
//   position: PropTypes.string,
//   company: PropTypes.string,
//   summary: PropTypes.string,
// }x

// Work.defaultProps = {
//   date: null,
//   position: null,
//   company: null,
//   summary: null,
// }

export default Work
