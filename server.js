const path = require('path');
const express = require('express');
// const routes = require('./controllers');
const sequelize = require('./config/connection');
// const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});