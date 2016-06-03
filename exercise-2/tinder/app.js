var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile(__dirname + 'public/index.html');
});

var port = process.env.PORT || 8000;
app.listen(port);

console.log('Server running at http://127.0.0.1:' + port);
