import React, { Component } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Terminal from "react-bash";
const history = [{ value: "Type `help` to begin" }];
const structure = {
  public: {
    file1: {
      content: "The is the content for file1 in the <public> directory."
    },
    file2: {
      content: "The is the content for file2 in the <public> directory."
    },
    file3: {
      content: "The is the content for file3 in the <public> directory."
    }
  },
  "README.md": { content: "Some readme" }
};
export default class TerminalAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandData: ""
    };
  }
  render() {
    const extensions = {
      sudo: {
        exec: ({ structure, history, cwd }) => {
          return {
            structure,
            cwd,
            history: history.concat({ value: "Nice try..." })
          };
        }
      }
    };
    return (
      <MuiThemeProvider>
        <Tabs>
          <Tab>
            <center>
              <div>
                <div style={{ flex: 1 }}>
                  <Terminal
                    history={history}
                    structure={structure}
                    extensions={extensions}
                    prefix={"user@HOMEPC"}
                  />
                </div>
                <div>{this.state.commandData}</div>
              </div>
            </center>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}
