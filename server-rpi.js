"use strict";

/**
* Run this on a raspberry pi 
* then browse (using google chrome/firefox) to http://[pi ip]:8080/
*/


const http    = require('http');
const express = require('express');

var options = {
  width : 1280,
  height: 720,
  fps : 30,
};

const WebStreamerServer = require('./lib/raspivid');

const app  = express();

  //public website
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/vendor/dist'));

const server  = http.createServer(app);
const silence = new WebStreamerServer(server, options);

server.listen(8080);
