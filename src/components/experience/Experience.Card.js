import IconButton from "@material-ui/core/IconButton"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import PauseIcon from "@material-ui/icons/PauseCircleFilledOutlined"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import React from "react"

const useStyles = makeStyles(theme => ({
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

let intervalTimer = null

export const Control = ({ state, setState, jobsLen }) => {
  const { index, isPlaying } = state

  const handlePlayPauseClick = () => {
    setState({ ...state, isPlaying: !isPlaying })
    // if (intervalTimer) {
    //   clearInterval(intervalTimer)
    //   intervalTimer = null
    // } else {
    //   intervalTimer = setInterval(() => {
    //     setState({ ...state, index: (index + 1) % jobsLen })
    //   }, 1000)
    // }
    console.log("clicked", isPlaying)
  }

  const theme = useTheme()
  const classes = useStyles()
  return (
    <div className={classes.controls}>
      <IconButton
        aria-label="previous"
        disabled={index === 0}
        onClick={() => setState({ ...state, index: index - 1 })}
      >
        {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
      </IconButton>
      <IconButton aria-label="play/pause" onClick={handlePlayPauseClick}>
        {isPlaying ? (
          <PauseIcon className={classes.playIcon} />
        ) : (
          <PlayArrowIcon className={classes.playIcon} />
        )}
      </IconButton>
      <IconButton
        aria-label="next"
        disabled={index === jobsLen - 1}
        onClick={() => setState({ ...state, index: index + 1 })}
      >
        {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
      </IconButton>
    </div>
  )
}
