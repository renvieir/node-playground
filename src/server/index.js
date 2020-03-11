const App = require('./app');
const environment = require('../config/environment');

const app = new App(environment);
app.startServer();
