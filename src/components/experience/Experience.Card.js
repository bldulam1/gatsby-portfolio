import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "50vw",
    height: "auto",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}))

export const ExperienceCard = ({ company, role, image }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      Test
      {/* <div className={classes.details}>
        <CardContent >
          <Typography component="h5" variant="h5">
            {company}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {role}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      /> */}
    </Card>
  )
}

export const Control = ({ jobIndex, setJobIndex, jobsLen }) => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <div className={classes.controls}>
      <IconButton
        aria-label="previous"
        disabled={jobIndex == 0}
        onClick={() => setJobIndex(jobIndex - 1)}
      >
        {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
      </IconButton>
      <IconButton aria-label="play/pause">
        <PlayArrowIcon className={classes.playIcon} />
      </IconButton>
      <IconButton
        aria-label="next"
        disabled={jobIndex == jobsLen - 1}
        onClick={() => setJobIndex(jobIndex + 1)}
      >
        {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
      </IconButton>
    </div>
  )
}
