

const express = require('express');
const PORT = 3000;
const db = require('./config/connection');
const routes = require('./routes/api/');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

db.once('open', () => {
  app.listen(PORT, () => console.log('Server started on port %s', PORT));
});