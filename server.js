var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

/*app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/getSomeJson', function (req, res) {
  res.send({message: "Hello world"});
});
*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
