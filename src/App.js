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
      checkboxes: config,
      flags: [],
      debug_level: "0"
    };
    this.getCheckboxes = this.getCheckboxes.bind(this);
    this.getTerminalInput = this.getTerminalInput.bind(this);
  }

  getTerminalInput = () => {
    const { flags, debug_level } = this.state;

    return JSON.stringify({
      flags,
      debug_level
    });
  };

  getCheckboxes = () => {
    const { checkboxes } = this.state;
    let checkbox_list = [];
    Object.keys(checkboxes).forEach((checkbox_name, i) => {
      checkbox_list.push(
        <Checkbox
          name={checkbox_name}
          key={i}
          onClick={this.handleCheckboxClicked}
          enabled={checkboxes[checkbox_name][0].enabled}
        />
      );
    });
    return checkbox_list;
  };

  handleCheckboxClicked = name => {
    // Update checkboxes
    const checkboxes = { ...this.state.checkboxes };
    checkboxes[name][0].enabled = !checkboxes[name][0].enabled;

    // Update flags
    let flags = [];
    Object.keys(checkboxes).forEach(checkbox_name => {
      if (checkboxes[checkbox_name][0].enabled) {
        flags.push(checkboxes[checkbox_name][0].flag);
      }
    });
    this.setState({
      checkboxes,
      flags
    });
  };

  handleDebugDropdownChange = debug_level => {
    this.setState({
      debug_level
    });
  };

  render() {
    return (
      <div className="App">
        <div className="gui-wrapper">
          <div className="grid-container">
            <Header className="header" title="INTERNAL DEBUGGING GUI"></Header>
            <div className="switches">
              <div className="checkbox-container">{this.getCheckboxes()}</div>
              <DebugDropdown onChange={this.handleDebugDropdownChange} />
            </div>
            <div className="run-button">
              <Button name="RUN"></Button>
            </div>
            <div className="terminal">
              <pre>Hello, world!</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
