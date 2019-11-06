/*
 * File:          setup.sh
 * Project:       internal-gui
 * File Created:  Wednesday, 6th November 2019 3:59:06 pm
 * Author(s):     Paul Martin
 * 
 * Last Modified: Wednesday, 6th November 2019 4:00:31 pm
 * Modified By:   Paul Martin (paul@blibspace.com)
 */

yarn install
(cd ./server && npm install)
(cd ./server/hyped && ./setup.sh && make)