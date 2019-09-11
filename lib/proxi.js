const http = require('http');

function createProxyRequest (host, path, ) {
  return function proxyRequest (request, response, next) {
    const options = {
      host: 
    }
  }
}
app.post('/api/BLABLA', function(req, res) {

  var options = {
    // host to forward to
    host:   'www.google.com',
    // port to forward to
    port:   80,
    // path to forward to
    path:   '/api/BLABLA',
    // request method
    method: 'POST',
    // headers to send
    headers: req.headers
  };

  var creq = http.request(options, function(cres) {

    // set encoding
    cres.setEncoding('utf8');

    // wait for data
    cres.on('data', function(chunk){
      res.write(chunk);
    });

    cres.on('close', function(){
      // closed, let's end client request as well 
      res.writeHead(cres.statusCode);
      res.end();
    });

    cres.on('end', function(){
      // finished, let's finish client request as well 
      res.writeHead(cres.statusCode);
      res.end();
    });

  }).on('error', function(e) {
    // we got an error, return 500 error to client and log error
    console.log(e.message);
    res.writeHead(500);
    res.end();
  });

  creq.end();

});