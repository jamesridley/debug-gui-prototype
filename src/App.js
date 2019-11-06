import React from 'react';
import logo from './logo.svg';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Terminal from './components/Terminal/Terminal';

import './App.css';
import TerminalAccess from './components/TerminalAccess/TerminalAccess';
import Checkbox from './components/Checkbox/Checkbox';
import DebugDropdown from './components/DebugDropdown/DebugDropdown';
import config from './config.json';

const io = require('socket.io-client');
const socket_port = 8080;
const socket = io.connect(`http://localhost:${socket_port}`);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkboxes: config,
      flags: [],
      debug_level: '0',
      terminalOutput: ''
    };
    this.getCheckboxes = this.getCheckboxes.bind(this);
    this.getTerminalInput = this.getTerminalInput.bind(this);

    socket.on('console_output', data => {
      this.setState({ terminalOutput: this.state.terminalOutput + data });
    });

    socket.on('console_error', err => {
      console.error(`CONSOLE_ERROR: ${err}`);
    });
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

  handleStartButtonClicked = () => {
    const { flags, debug_level } = this.state;

    socket.emit('bbb_start', {
      flags: flags,
      debug_level: debug_level
    });
  };

  handleStopButtonClicked = () => {
    socket.emit('bbb_stop');
  };

  handleNewTerminalContent = event => {
    const elem = event.target;
    elem.scrollTop = elem.scrollHeight;
  };

  render() {
    return (
      <div className='App'>
        <div className='gui-wrapper'>
          <div className='grid-container'>
            <Header className='header' title='INTERNAL DEBUGGING GUI'></Header>
            <div className='switches'>
              <div className='checkbox-container'>{this.getCheckboxes()}</div>
              <DebugDropdown onChange={this.handleDebugDropdownChange} />
            </div>
            <div className='run-button'>
              <Button
                name='RUN'
                handleClick={this.handleStartButtonClicked}
              ></Button>
              <Button
                name='STOP'
                handleClick={this.handleStopButtonClicked}
              ></Button>
            </div>
            <Terminal content={this.state.terminalOutput} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
