import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import {
  Coordinate,
  getBestCandidate,
} from "../../components/works/pathfinding/PathFinder.Coordinate"
import { v4 as uuid } from "uuid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Checkbox from "@material-ui/core/Checkbox"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"

const useStyle = makeStyles(theme => ({
  box: {
    borderColor: theme.palette.secondary.dark,
    backgroundColor: "#333333",
    height: "0.75rem",
    width: "0.75rem",
    display: "flex",
    flexDirection: "center",
    alignItems: "center",
  },
  start: {
    backgroundColor: "green",
  },
  target: {
    backgroundColor: "red",
  },
  block: {
    backgroundColor: "black",
  },
  open: {
    backgroundColor: theme.palette.secondary.light,
  },
  closed: {
    backgroundColor: theme.palette.secondary.main,
  },
  head: {
    backgroundColor: "green",
  },
  path: {
    backgroundColor: theme.palette.primary.light,
  },
}))

let timer = null
const ROW = 62
const COL = 48
const SPEED = 10

const zeros = dimensions => {
  const array = []

  for (let i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length === 1 ? 0 : zeros(dimensions.slice(1)))
  }

  return array
}

const newPuzzle = () => {
  const startCoordinate = new Coordinate(
    Math.floor(Math.random() * ROW),
    Math.floor(Math.random() * COL)
  )

  return {
    grid: zeros([ROW, COL]),
    start: startCoordinate,
    target: new Coordinate(
      Math.floor(Math.random() * ROW),
      Math.floor(Math.random() * COL),
      null
    ),
    blocks: {},
    mouseClicked: false,
    openCoordinates: { [`${startCoordinate.string()}`]: startCoordinate },
    closedCoordinates: {},
    path: {},
    head: startCoordinate,
  }
}

const getKey = (rowI, colI) => `_${rowI}-${colI}`

export default () => {
  const classes = useStyle()
  const [state, setstate] = React.useState(newPuzzle())

  const onMouseClick = value => {
    setstate({ ...state, mouseClicked: value })
  }

  const onMouseEnter = (ri, ci) => {
    if (!state.mouseClicked) {
      return
    }

    const nc = new Coordinate(ri, ci, null)
    let newBlocks = state.blocks
    if (isBlock(ri, ci)) {
      delete newBlocks[getKey(ri, ci)]
    } else {
      newBlocks[getKey(ri, ci)] = nc
    }
    setstate({ ...state, blocks: newBlocks })
  }

  const isStart = (rowI, colI) =>
    state.start && state.start.row === rowI && state.start.col === colI
  const isTarget = (rowI, colI) =>
    state.target && state.target.row === rowI && state.target.col === colI
  const isBlock = (rowI, colI) => Boolean(state.blocks[getKey(rowI, colI)])
  const isCoordinateClosed = (rowI, colI) =>
    Boolean(state.closedCoordinates[getKey(rowI, colI)])
  const isCoordinateOpen = (rowI, colI) =>
    Boolean(state.openCoordinates[getKey(rowI, colI)])
  const isPath = (rowI, colI) => Boolean(state.path[getKey(rowI, colI)])
  const isHead = (rowI, colI) =>
    state.head && state.head.row === rowI && state.head.col === colI

  const startStopPathFind = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    } else {
      timer = setInterval(() => {
        let newOpenCoordinates = state.openCoordinates || [],
          newClosedCoordinates = state.closedCoordinates

        const bestIndex = getBestCandidate(
          newOpenCoordinates,
          state.start,
          state.target
        )
        const current = state.openCoordinates[bestIndex]

        if (
          !current ||
          (current.row === state.target.row && current.col === state.target.col)
        ) {
          let pathHead = current
          let path = {}
          while (pathHead) {
            path[pathHead.string()] = true
            pathHead = pathHead.parent
          }
          clearInterval(timer)
          timer = null

          setstate({ ...state, path })
          return
        }
        delete newOpenCoordinates[bestIndex]
        newClosedCoordinates[current.string()] = current

        for (let neighbor of current.neighbors(current)) {
          const neighborKey = neighbor.string()
          const isTraversable =
            neighbor.isInside(ROW, COL) && !Boolean(state.blocks[neighborKey])
          const isClosed = Boolean(newClosedCoordinates[neighborKey])

          if (!isTraversable || isClosed) {
            continue
          }

          const isOpen = Boolean(newOpenCoordinates[neighborKey])
          if (!isOpen) {
            newOpenCoordinates[neighborKey] = neighbor
          }
        }

        setstate({
          ...state,
          head: current,
          openCoordinates: newOpenCoordinates,
          closedCoordinates: newClosedCoordinates,
        })
      }, SPEED)
    }
  }

  return (
    <Layout>
      <SEO title="Path Finding" />
      <Box
        width="100%"
        height="85vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        onMouseDown={() => onMouseClick(true)}
        onMouseUp={() => onMouseClick(false)}
      >
        <Typography variant="h4" color="primary">
          Path Finding Algorithm
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          Move the mouse while clicking to create obstacles
        </Typography>
        <Box flexGrow={1}>
          {state.grid.map((row, ri) => (
            <div
              key={uuid()}
              style={{ display: "flex", flexDirection: "center" }}
            >
              {row.map((col, ci) => (
                <div
                  key={uuid()}
                  onMouseEnter={() => onMouseEnter(ri, ci)}
                  className={`
                      ${classes.box}
                      ${isStart(ri, ci) && classes.start}
                      ${isBlock(ri, ci) && classes.block}
                      ${isHead(ri, ci) && classes.head}
                      ${isTarget(ri, ci) && classes.target}
                      ${isPath(ri, ci) && classes.path}
                      ${isCoordinateOpen(ri, ci) && classes.open}
                      ${isCoordinateClosed(ri, ci) && classes.closed}
                    `}
                />
              ))}
            </div>
          ))}
        </Box>
        <Box>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => startStopPathFind()}
          >
            {timer ? "Pause" : "Start"}
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => setstate(newPuzzle())}
          >
            Reset
          </Button>
        </Box>
      </Box>

      <Motivation />
      <ToDo />
    </Layout>
  )
}

function Motivation() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      marginTop={"4rem"}
    >
      <Container maxWidth="md">
        <Typography variant={"h5"} color="primary">
          Motivation
        </Typography>
        <Typography variant={"body1"}>
          While I was studying SLAM algorithms for LIDAR frame stitching, I came
          across with the youtube video below. I was amazed how a path-finding
          problem is solved, so I researched on the algorithm behind this video.
        </Typography>
      </Container>
      <iframe
        width="700"
        height="400"
        src="https://www.youtube.com/embed/IngelKjmecg"
      ></iframe>
    </Box>
  )
}

function ToDo() {
  const todos = [
    "Create a dataset for mazes",
    "Load a maze from the maze dataset",
    "Calculate the optimum return path of the mouse",
    "Improve the UI of the maze by using block borders as obstacles",
    "Improve the UI for building the maze, such that the user can select some blocks then define the borders (obstacles) of those blocks",
    "Improve the speed of rendering by re-rendering only updated blocks",
  ]

  return (
    <Box marginTop={"2rem"}>
      <Container maxWidth="md">
        <Typography variant={"h5"} color="primary">
          Future Improvements
        </Typography>
        <Typography variant={"body1"}>
          The implementation above is the first part towards making something
          like the micromouse challenge. Below are my plans for future
          improvements.
        </Typography>
        <List>
          {todos.map(todo => (
            <ListItem key={uuid()} role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={false}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={todo} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  )
}
