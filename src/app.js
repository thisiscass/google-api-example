const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/maps.routes');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
})