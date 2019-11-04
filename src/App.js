import React from "react";
import logo from "./logo.svg";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

import "./App.css";
import TerminalAccess from "./components/TerminalAccess/TerminalAccess";
import Checkbox from "./components/Checkbox/Checkbox";
import DebugDropdown from "./components/DebugDropdown/DebugDropdown";
import config from "./config.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkboxes: config
    };
    this.getEnabledFlags = this.getEnabledFlags.bind(this);
    this.getCheckboxes = this.getCheckboxes.bind(this);
  }

  getEnabledFlags = () => {
    const { checkboxes } = this.state;
    let enabled_flags = [];
    Object.keys(checkboxes).forEach(checkbox_name => {
      if (checkboxes[checkbox_name][0].enabled) {
        enabled_flags.push(checkboxes[checkbox_name][0].flag);
      }
    });
    return enabled_flags;
  };

  handleCheckboxClicked = name => {
    const checkboxes = { ...this.state.checkboxes };
    checkboxes[name][0].enabled = !checkboxes[name][0].enabled;
    this.setState({
      checkboxes
    });
  };

  getCheckboxes = () => {
    const { checkboxes } = this.state;
    let checkbox_list = [];
    Object.keys(checkboxes).forEach(checkbox_name => {
      checkbox_list.push(
        <Checkbox
          name={checkbox_name}
          onClick={this.handleCheckboxClicked}
          enabled={checkboxes[checkbox_name][0].enabled}
        />
      );
    });
    return checkbox_list;
  };

  render() {
    return (
      <div className="App">
        <div className="gui-wrapper">
          <div className="grid-container">
            <Header className="header" title="INTERNAL DEBUGGING GUI"></Header>
            <div className="switches">
              <div>{this.getCheckboxes()}</div>
            </div>
            <div className="debug-dropdown">
              <DebugDropdown></DebugDropdown>
            </div>
            <div className="run-button">
              <Button name="RUN"></Button>
            </div>
            <div className="terminal">
              <TerminalAccess></TerminalAccess>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
