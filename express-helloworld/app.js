var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/jim', function (req, res) {
  res.send('Hello Jim OpenShift Test.\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

