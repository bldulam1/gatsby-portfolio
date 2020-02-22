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
      <Typography variant="h6">{`${startDate.month}/${startDate.year} to ${endDate.month}/${endDate.year}`}</Typography>
      <Typography variant="h5">
        {position}, {company}
      </Typography>
      <Typography variant="body">{summary}</Typography>
      <br />
      <ul>
        {bullets &&
          bullets.length &&
          bullets.map(bullet => (
            <li>
              <Typography>{bullet}</Typography>
            </li>
          ))}
      </ul>
      {projects &&
        projects.length &&
        projects.map(({ name, date, bullet }) => {
          const pStartDate = getYearAndMonth(date.start)
          const pEndDate = getYearAndMonth(date.end)

          return (
            <div>
              <Typography variant="body2">{name}</Typography>
              <Typography variant="h6">{`${pStartDate.month}/${pStartDate.year} to ${pEndDate.month}/${pEndDate.year}`}</Typography>
              <Typography variant="body">{summary}</Typography>
            </div>
          )
        })}
    </Box>
  )
}

// const WorkProject =

// Work.propTypes = {
//   date: PropTypes.any,
//   position: PropTypes.string,
//   company: PropTypes.string,
//   summary: PropTypes.string,
// }

// Work.defaultProps = {
//   date: null,
//   position: null,
//   company: null,
//   summary: null,
// }

export default Work
