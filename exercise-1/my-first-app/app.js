var http = require('http');
var signBunny = require('sign-bunny');

var app = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  response.write(signBunny('Hola FIUBA!'));
  response.end();
});

app.listen(8000);

console.log('Server running at http://127.0.0.1:8000/');