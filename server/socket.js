/*
 * File:          socket.js
 * Project:       internal-gui-backend
 * File Created:  Wednesday, 6th November 2019 10:53:45 am
 * Author(s):     Paul Martin
 *
 * Description:   Handles websocket requests and responses using socket.io
 *
 * Last Modified: Wednesday, 6th November 2019 2:50:06 pm
 * Modified By:   Paul Martin (paul@blibspace.com)
 */

const Bbb = require('./Bbb.js');
const bbb = new Bbb();

const main = port => {
  const io = require('socket.io').listen(port);

  io.on('connection', socket => {
    console.log('socket: new connection');

    socket.on('disconnect', () => {
      console.log('socket: disconnected');
    });

    socket.on('bbb_start', payload => {
      // if already connected to beagle bone black, don't connect again
      if (bbb.isConnected()) {
        console.log('** bbb already running');
        return;
      }

      // Pipes the outupt from the BBB to the socket
      const pipe = (data, err) => {
        if (err) {
          socket.emit('console_error', err.toString());
          return;
        }
        //console.log(`** stdout: ${data}`);
        socket.emit('console_output', data.toString());
      };

      console.log('** starting bbb');
      console.log(payload.flags);
      bbb.connect(payload.flags, payload.debug_level, pipe);
    }); // bbb_start

    socket.on('bbb_stop', () => {
      console.log('** stopping bbb');
      bbb.endConnection();
    }); // bbb_stop
  });
};

module.exports = main;
