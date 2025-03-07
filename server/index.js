const path = require('path');
const express = require('express');
const parser = require('body-parser');
const routes = require('./routes.js');
const db = require('../database/index.js');

const PORT = 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use('/api', routes);

app.listen(PORT, () => console.log('App is listening on port: ', PORT));
