import React from "react";
import logo from "./logo.svg";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import "./App.css";
import TerminalAccess from "./components/TerminalAccess/TerminalAccess";
import Checkbox from "./components/Checkbox/Checkbox";
import config from "./config.json";

class App extends React.Component {
  state = {
    checkboxes: config
  };

  handleCheckboxClicked = name => {
    const checkboxes = { ...this.state.checkboxes };
    checkboxes[name][0].enabled = !checkboxes[name][0].enabled;
    this.setState({
      checkboxes
    });
  };

  getCheckboxes = (checkboxes, handleCheckboxClicked) => {
    let checkboxList = [];
    Object.keys(checkboxes).forEach(checkbox_name => {
      checkboxList.push(
        <Checkbox
          // name={checkboxes[checkbox_name][0].flag}
          name={checkbox_name}
          onClick={handleCheckboxClicked}
          enabled={checkboxes[checkbox_name][0].enabled}
        />
      );
    });
    return checkboxList;
  };

  render() {
    return (
      <div className="App">
        <div className="gui-wrapper">
          <div className="grid-container">
            <Header className="header" title="Internal Debugging GUI"></Header>
            <div className="switches">
              <div>
                {this.getCheckboxes(
                  this.state.checkboxes,
                  this.handleCheckboxClicked
                )}
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
