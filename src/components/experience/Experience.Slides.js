import { Link, List, ListItem, ListItemText } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"

import { Control } from "../../components/experience/Experience.Card"

const useStyles = makeStyles(theme => ({
  card: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
  cardMedia: {
    height: "100%",
    minHeight: "40vh",
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.contrastText,
    },
  },
}))

export default ({ jobs }) => {
  const [state, setState] = React.useState({ index: 0, isPlaying: false })
  const jobsLen = jobs.length
  const classes = useStyles()

  const { image, company, role, date, companySite, points } = jobs[state.index]
  return (
    <Box minHeight="80vh" display="flex" flexDirection="column">
      <Typography component="h4" variant="h4" color="textPrimary">
        Work Experience
      </Typography>
      <Card className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={5} lg={6}>
            <CardMedia
              image={image}
              title="Test"
              className={classes.cardMedia}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={6}>
            <CardContent>
              <Typography component="h5" variant="h5" color="primary">
                {role}
              </Typography>
              <Link href={companySite} underline="none">
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="secondary"
                  className={classes.link}
                >
                  {company}
                </Typography>
              </Link>
              <Typography variant="caption" color="textSecondary">
                {` (${date})`}
              </Typography>

              <List>
                {points.map((point, index) => (
                  <ListItem key={"point-key-" + index}>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        marginTop="2rem"
      >
        <Control state={state} setState={setState} jobsLen={jobsLen} />
      </Box>
    </Box>
  )
}
