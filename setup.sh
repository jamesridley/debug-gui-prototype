git submodule init
git submodule update
yarn install
(cd ./server && npm install)
(cd ./server/hyped && ./setup.sh && make)