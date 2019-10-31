import React from "react";
import logo from "./logo.svg";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import "./App.css";
import TerminalAccess from "./components/TerminalAccess/TerminalAccess";
import Checkbox from "./components/Checkbox/Checkbox";

class App extends React.Component {
  state = {
    checkboxes: {
      "Fake IMU": {
        enabled: false
      }
    }
  };

  handleCheckboxClicked = name => {
    const checkboxes = { ...this.state.checkboxes };
    checkboxes[name].enabled = !checkboxes[name].enabled;
    console.log(
      "checkbox " + name + " is enabled: " + checkboxes[name].enabled
    );
    this.setState({
      checkboxes
    });
  };

  render() {
    return (
      <div className="App">
        <div className="gui-wrapper">
          <div className="grid-container">
            <Header className="header" title="Internal Debugging GUI"></Header>
            <div className="switches">
              <div className="fake-imu">
                <Checkbox
                  name="Fake IMU"
                  onClick={this.handleCheckboxClicked}
                  enabled={this.state.checkboxes["Fake IMU"].enabled}
                />
              </div>
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
