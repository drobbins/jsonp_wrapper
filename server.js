var request = require('request'),
    http = require('http'),
    querystring = require('querystring');
http.createServer(function (req, res) {
  query_as_string = req.url.split("?")[1];
  query = querystring.parse(query_as_string);
  if (!query.url || !query.callback){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('No URL or Callback function specified.\n');
  }
  else{
    request(
      {
        url: query.url,
        headers: {
          Accept: query.type ||  "application/json,text/plain,text/html,*/*"
        }
      },
      function(error, response, body){
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        if(body.match(/^\{.*\}$/)){ // Don't wrap data that is already JSON
          res.end("(function(){"+query.callback+"({contents:"+body+"});)()");
        }
        else{
          res.end("(function(){"+query.callback+"({contents:'"+body+"'});)()");
        }
    });
  }
}).listen(80);
