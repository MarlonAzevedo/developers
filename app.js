const express = require('express');
const app = express();

//rota para developers
const roteDevelopers = require('./routes/developers');
app.use('/ligue', roteDevelopers);

module.exports = app;