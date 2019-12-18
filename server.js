const express = require('express');
const projectRouter = require('./projectModelRouter.js')
const actionRouter = require('./actionModelRouter.js')
const server = express();
const moment = require('moment')

server.use(logger);
server.use(express.json());
server.use('/projects', projectRouter);
server.use('/actions', actionRouter)


function logger(req, res, next) {
  const date = moment().format('MM/D/YYYY hh:mm:ss')
  console.log(`A ${req.method} Request has been initiated at ${date} on localhost:4000${req.url}`);
  next();
}

module.exports = server;
