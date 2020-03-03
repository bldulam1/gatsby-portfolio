/**
@param {Array} nodes
@param {Coordinate} startNode
@param {Coordinate} targetNode
*/
export function getBestCandidate(nodes, startNode, targetNode) {
  let bestInd = null
  let bestCost = null
  for (var key in nodes) {
    const cost = nodes[key].cost(startNode, targetNode)
    if (bestCost == null || bestCost > cost) {
      bestCost = cost
      bestInd = key
    }
  }

  return bestInd
}

export class Coordinate {
  /**
   * @param {Number} row
   * @param {Number} col
   * @param {Coordinate} parent
   */
  constructor(row, col, parent) {
    this.row = row
    this.col = col
    this.parent = parent | null
    this._cost = undefined
  }
  string() {
    return `_${this.row}-${this.col}`
  }
  isInside(gridRow, gridCol) {
    return (
      0 <= this.row && this.row < gridRow && 0 <= this.col && this.col < gridCol
    )
  }
  neighbors() {
    return {
      top: new Coordinate(this.row + 1, this.col, this),
      bottom: new Coordinate(this.row - 1, this.col, this),
      left: new Coordinate(this.row, this.col - 1, this),
      right: new Coordinate(this.row, this.col + 1, this),
    }
  }
  cost(start, target) {
    if (this._cost === undefined) {
      const h = Math.abs(this.row - start.row) + Math.abs(this.col - start.col)
      const g =
        Math.abs(this.row - target.row) + Math.abs(this.col - target.col)
      this._cost = h * 0.01 + g * 0.99
    }
    return this._cost
  }
}
