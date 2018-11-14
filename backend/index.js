const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const joblink = require('./joblink');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/joblink', joblink.scrape);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
