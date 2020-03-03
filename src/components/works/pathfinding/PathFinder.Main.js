import "./PathFinder.Styles.css"

import { Coordinate, getBestCandidate } from "./PathFinder.Coordinate"

import React from "react"
import { v4 as uuid } from "uuid"

let timer = null
const ROW = 30
const COL = 30
const SPEED = 10

function zeros(dimensions) {
  var array = []

  for (var i = 0; i < dimensions[0]; ++i) {
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
      Math.floor(Math.random() * COL)
    ),
    blocks: {},
    mouseClicked: false,
    openCoordinates: { [`${startCoordinate.string()}`]: startCoordinate },
    closedCoordinates: {},
    head: null,
  }
}

export default () => {
  const [state, setstate] = React.useState(newPuzzle())

  const onMouseClick = value => setstate({ ...state, mouseClicked: value })

  const onMouseEnter = (ri, ci) => {
    if (!state.mouseClicked) {
      return
    }

    const nc = new Coordinate(ri, ci)
    let newBlocks = state.blocks
    if (isBlock(ri, ci)) {
      delete newBlocks[nc.string()]
    } else {
      newBlocks[nc.string()] = nc
    }
    setstate({ ...state, blocks: newBlocks })
  }

  const isStart = (rowI, colI) =>
    state.start && state.start.row === rowI && state.start.col === colI
  const isTarget = (rowI, colI) =>
    state.target && state.target.row === rowI && state.target.col === colI
  const isBlock = (rowI, colI) =>
    Boolean(state.blocks[new Coordinate(rowI, colI).string()])
  const isCoordinateClosed = (rowI, colI) =>
    Boolean(state.closedCoordinates[new Coordinate(rowI, colI).string()])
  const isCoordinateOpen = (rowI, colI) =>
    Boolean(state.openCoordinates[new Coordinate(rowI, colI).string()])
  const isHead = (rowI, colI) =>
    state.head && state.head.row === rowI && state.head.col === colI

  const onReset = () => setstate(newPuzzle())

  const startStopPathFind = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    } else {
      timer = setInterval(() => {
        let newOpenCoordinates = state.openCoordinates,
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
          clearInterval(timer)
          timer = null
          console.log(newClosedCoordinates, current)
          return
        }
        delete newOpenCoordinates[bestIndex]
        newClosedCoordinates[current.string()] = current

        const neighbors = current.neighbors()

        for (var key in neighbors) {
          const neighbor = neighbors[key]
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
    <div id="App">
      <div className="Column">
        {state.grid.map((row, ri) => (
          <div key={uuid()} className="Row">
            {row.map((col, ci) => {
              let _isStart, _isTarget, _isBlock, _isOpen, _isClosed, _isHead
              if (isBlock(ri, ci)) {
                _isBlock = true
              } else if (isTarget(ri, ci)) {
                _isTarget = true
              } else if (isHead(ri, ci)) {
                _isHead = true
              } else if (isStart(ri, ci)) {
                _isStart = true
              } else if (isCoordinateClosed(ri, ci)) {
                _isClosed = true
              } else if (isCoordinateOpen(ri, ci)) {
                _isOpen = true
              }

              return (
                <div
                  key={uuid()}
                  className={`Box ${
                    _isBlock
                      ? "Block"
                      : _isStart
                      ? "Start"
                      : _isTarget
                      ? "Target"
                      : _isHead
                      ? "Head"
                      : _isClosed
                      ? "Closed"
                      : _isOpen
                      ? "Open"
                      : ""
                  }`}
                  onMouseDown={() => onMouseClick(true)}
                  onMouseUp={() => onMouseClick(false)}
                  onMouseEnter={() => onMouseEnter(ri, ci)}
                  value={`${ri},${ci}`}
                >
                  {_isStart ? "S" : _isTarget ? "T" : ""}
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div className="Row">
        <button onClick={() => startStopPathFind()}>
          {timer ? "Pause" : "Start"}
        </button>
        <button onClick={() => onReset()}>Reset</button>
      </div>
    </div>
  )
}
