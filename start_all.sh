#!/bin/bash
cd ~/SayHey
. kill_all.sh

cd ~/SayHey/frontend
npm start &

cd ~/SayHey/backend
npm start &

cd ./rss-svc
python3 server.py &

cd ~/SayHey
