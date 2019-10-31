import React from "react";
import logo from "./logo.svg";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import "./App.css";
import TerminalAccess from "./components/TerminalAccess/TerminalAccess";
import Checkbox from "./components/Checkbox/Checkbox";

class App extends React.Component {
  state = {
    checkboxes: [
      {
        id: "fakeIMUs",
        enabled: false
      }
    ]
  };

  handleCheckBox = checkbox => {
    const checkboxes = [...this.state.checkboxes];
    const index = checkboxes.indexOf(checkbox);
    checkboxes[index].enabled = !checkboxes[index].enabled;
    console.log(
      checkboxes[index].id + " is enabled: " + checkboxes[index].enabled
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
                  handleClick={this.handleCheckBox}
                  enabled={this.state.fakeimu_enabled}
                ></Checkbox>
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
