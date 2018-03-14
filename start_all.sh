#!/bin/bash

cd ~/touchpoint/frontend
npm start &

cd ~/touchpoint/backend
npm start &

cd ./rss-svc
python3 server.py &

cd ~/touchpoint
