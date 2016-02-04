#!/usr/bin/env bash

curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get update -y
apt-get install nodejs -y

cd /vagrant

echo "running npm install - this may take a few minutes"
rm -rf node_modules
npm install
npm -g install gulp http-server
