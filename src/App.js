import React from 'react';
import logo from './logo.svg';
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import './App.css';
import TerminalAccess from './components/TerminalAccess/TerminalAccess';
import Checkbox from './components/Checkbox/Checkbox';

function App() {
  return (
    <div className="App">
        <div className="gui-wrapper">
          <div className="grid-container">
            <Header className="header" title="Internal Debugging GUI"></Header>
            
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

export default App;
