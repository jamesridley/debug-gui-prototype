/*
 * File:          index.js
 * Project:       internal-gui-backend
 * File Created:  Wednesday, 6th November 2019 10:37:43 am
 * Author(s):     Paul Martin
 *
 * Description:   Entry point for backend
 *
 * Last Modified: Wednesday, 6th November 2019 11:47:10 am
 * Modified By:   Paul Martin (paul@blibspace.com)
 */

// start websocket server
const socket = require('./socket.js');
socket(8080);
