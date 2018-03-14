#!/bin/bash

# source: stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux

FRONTEND=3000
BACKEND=3001
RSS_SVC=3002

for i in $FRONTEND $BACKEND $RSS_SVC; do
  fuser -k $i/tcp 
done
