import React from "react"

function getDisplayName(ChartComponent) {
  const name =
    ChartComponent.displayName || ChartComponent.name || "ChartComponent"
  return name
}

export default function updatingDataWrapper(ChartComponent) {
  const LENGTH = 130

  class UpdatingComponentHOC extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        length: LENGTH,
        data: this.props.data.slice(0, LENGTH),
      }
      this.speed = 1000
    }
    componentDidMount() {
      // document.addEventListener("keyup", this.onKeyPress)
      this.interval = setInterval(() => {
        if (this.state.length < this.props.data.length) {
          console.log(this.props.data[this.state.length])

          this.setState({
            length: this.state.length + 1,
            data: this.props.data.slice(0, this.state.length + 1),
          })
        }
      }, this.speed)
    }
    componentWillUnmount() {
      if (this.interval) clearInterval(this.interval)
      document.removeEventListener("keyup", this.onKeyPress)
    }
    render() {
      const { type } = this.props
      const { data } = this.state

      return <ChartComponent ref="component" data={data} type={type} />
    }
  }
  UpdatingComponentHOC.defaultProps = {
    type: "svg",
  }
  UpdatingComponentHOC.displayName = `updatingDataWrapper(${getDisplayName(
    ChartComponent
  )})`

  return UpdatingComponentHOC
}
