import { Button, Tooltip } from "@streetscape.gl/monochrome"
import { Link } from "gatsby"
import React, { PureComponent } from "react"

import { HELP_BUTTON_STYLE, TOOLTIP_STYLE } from "./custom-styles"

export default class HelpPanel extends PureComponent {
  static renderButton(props) {
    return (
      <Tooltip content="Close" style={TOOLTIP_STYLE}>
        <Link to="/works">
          <Button type={Button.MUTED} style={HELP_BUTTON_STYLE} {...props}>
            <i className="icon-close" />
          </Button>
        </Link>
      </Tooltip>
    )
  }

  render() {
    return (
      <div id="help">
        <table>
          <tbody>
            <tr>
              <td>
                <h4>3D Navigation</h4>
              </td>
            </tr>
            <tr>
              <td>Pan</td>
              <td>Mouse Left</td>
            </tr>
            <tr>
              <td>Rotate</td>
              <td>Mouse Right</td>
            </tr>
            <tr>
              <td />
              <td>Shift + Mouse Left</td>
            </tr>
            <tr>
              <td>Top-down Camera</td>
              <td>T</td>
            </tr>
            <tr>
              <td>Perspective Camera</td>
              <td>P</td>
            </tr>
            <tr>
              <td>Driver Camera</td>
              <td>D</td>
            </tr>
            <tr>
              <td>Recenter Camera</td>
              <td>R</td>
            </tr>

            <tr>
              <td>
                <h4>Interaction</h4>
              </td>
            </tr>
            <tr>
              <td>Select 3D Object</td>
              <td>Click</td>
            </tr>
            <tr>
              <td>Show/Hide Tooltip</td>
              <td>I</td>
            </tr>

            <tr>
              <td>
                <h4>Playback</h4>
              </td>
            </tr>
            <tr>
              <td>Play/Pause</td>
              <td>Space</td>
            </tr>
            <tr>
              <td>Prev Frame</td>
              <td>Left Arrow</td>
            </tr>
            <tr>
              <td>Next Frame</td>
              <td>Right Arrow</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
