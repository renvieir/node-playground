const express = require('express');
const cors = require('cors');
const routes = require('../app/routes');
const loggerMiddleware = require('../app/middlewares/logger');

class App {
  constructor(env) {
    this.env = env;
  }

  init() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  startServer() {
    this.init();
    this.app.listen(this.env.port);
  }

  config() {
    this.app.use(cors());
  }

  middlewares() {
    this.app.use(loggerMiddleware);
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = App;
