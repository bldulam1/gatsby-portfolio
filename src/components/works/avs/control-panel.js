// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, { PureComponent } from "react"
import { Link } from "gatsby"
import { StreamSettingsPanel, XVIZPanel } from "streetscape.gl"

import { STREAM_SETTINGS_STYLE, XVIZ_PANEL_STYLE } from "./custom-styles"
import MetadataPanel from "./metadata-panel"
import HelpPanel from "./help-panel"

export default class ControlPanel extends PureComponent {
  state = {
    tab: "streams",
  }

  _gotoTab(tab) {
    this.setState({ tab, lastTab: this.state.tab })
  }

  _renderTabContent() {
    const { log, selectedLog, onLogChange } = this.props

    switch (this.state.tab) {
      case "streams":
        return <StreamSettingsPanel log={log} style={STREAM_SETTINGS_STYLE}/>

      case "charts":
        return (
          <XVIZPanel
            log={log}
            name="Metrics"
            style={XVIZ_PANEL_STYLE}
            componentProps={{
              metric: { getColor: "#ccc" },
            }}
          />
        )

      case "info":
        return <MetadataPanel log={log} selectedLog={selectedLog} onLogChange={onLogChange}/>

      case "help":
        return <HelpPanel/>

      default:
        return null
    }
  }

  _renderTab({ id, description }) {
    const { tab } = this.state

    return (
      <div className={`tab ${id === tab ? "active" : ""}`} onClick={() => this._gotoTab(id)}>
        {id}
      </div>
    )
  }

  render() {
    const { tab } = this.state

    const isHelpOpen = tab === "help"

    return (
      <div id="control-panel">
        <header>
          <div id="logo">
            <Link to="/">
              <svg
                width="2rem"
                viewBox="0 0 1885.6 2314.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(11715 -17.201)">
                  <path
                    fill="#daa520"
                    d="m-10772 154.41-120.39 69.507v265.72l120.39-69.507 712.69 411.47v822.95l-712.69 411.47-712.69-411.47v-822.95l118.46-68.393v-265.72l-348.58 201.25v1088.7l942.81 544.33 942.81-544.33v-1088.7z"
                  />
                  <path
                    fill="#fff"
                    d="m-11011 17.201-236.92 136.79v1363.8l475.77 274.69 475.77-274.69v-549.37l-475.77-274.69-238.85 137.9zm238.85 950.08 238.85 137.9v275.8l-238.85 137.9-238.85-137.9v-275.8z"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <div id="help-btn">
            {HelpPanel.renderButton({
              isOpen: isHelpOpen,
              onClick: () => this._gotoTab(isHelpOpen ? this.state.lastTab : "help"),
            })}
          </div>
          {!isHelpOpen && (
            <div id="tabs">
              {this._renderTab({ id: "info", description: "Log Info" })}
              {this._renderTab({ id: "streams", description: "Stream Settings" })}
              {this._renderTab({ id: "charts", description: "Charts" })}
            </div>
          )}
        </header>

        <main>{this._renderTabContent()}</main>
      </div>
    )
  }
}
