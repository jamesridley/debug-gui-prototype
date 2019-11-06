/*
 * File:          Bbb.js
 * Project:       internal-gui
 * File Created:  Monday, 4th November 2019 7:34:54 pm
 * Author(s):     Paul Martin
 *
 * Description:   Runs the HYPED binary (./hyped) as a child_process and handles the connection
 *                -> In future it should handle the connection to the Beagle Bone Black (BBB)
 *                   instead of executing the binary locally
 *
 * Last Modified: Wednesday, 6th November 2019 11:17:50 am
 * Modified By:   Paul Martin (paul@blibspace.com)
 */

const { spawn } = require('child_process');

class Bbb {
  // subprocess.connected is not reliable to check whether the BBB is running
  _connected = false;

  connect(flags, debug_level, pipeCallback) {
    const params = flags.concat([debug_level]);

    this.child = spawn('./hyped', params);
    this.child.stdout.setEncoding('utf8');
    this._connected = true;

    this.child.on('exit', code => {
      this._connected = false;
      console.log(`Child process exited with code ${code}`);

      // raise error iff not exited gracefully (code != 0)
      if (code != 0)
        pipeCallback(null, `Child process exited with code ${code}`);
    });

    // set up pipe for terminal output
    this.child.stdout.on('data', pipeCallback);

    // error handling: when process runs into error
    this.child.stderr.on('data', data => {
      console.log(`stderr: ${data}`);
      pipeCallback(null, `stderr: ${data}`);
    });
  }

  isConnected() {
    return this._connected;
  }

  endConnection() {
    this.child.kill('SIGINT');
  }
}

module.exports = Bbb;
