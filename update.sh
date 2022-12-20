#!/bin/bash

git pull origin main

yarn

NODE_ENV=production yarn build

APP="discovr-cms"

IDS=`pm2 id $APP`;

# start the app
if [ "$IDS" = "[]" ]; then
  pm2 start ecosystem.config.js --env production
else
  pm2 reload ecosystem.config.js
fi;
