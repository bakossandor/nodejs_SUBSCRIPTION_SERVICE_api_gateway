const express = require('express');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');

const route = require('./router/router');

const app = express();
app.use(bodyParser.json());

app.get('/probe', (req, res, next) => {
  res.status(200).end();
});

route(app);

const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log(`The Gateway is listening on port ${port}`);
})