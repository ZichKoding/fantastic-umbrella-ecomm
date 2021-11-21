const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const seedAll = require('./seeds/index');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// turn on connection to db and server
// to initialize the db turn force to true and uncommment `.then(seedAll())`
// run `node server.js` or `npm start`
// come back to server.js turn force to false and comment `.then(seedAll())`
sequelize.sync({ force: false })
  // .then(seedAll())
  .then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
