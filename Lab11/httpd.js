const http = require('http');
const fs = require('fs');
var url = require('url');
const hostname = '127.0.0.1';
const port = 30041; //startport
const endPort = 30050; //endport

var server = http.createServer((request, response) => 
{             // url.parse(request.url).pathname adapted from 
  var path = url.parse(request.url).pathname;       //https://stackoverflow.com/questions/17184791/node-js-url-parse-and-pathname-property

  if (path == '/')
  {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('Hello World');
      response.end();
  }
  else if(path == '/lab11.html')
  {   // "__dirname is an environment variable that tells you the absolute path of the directory containing thee currently executing file"
      fs.readFile(__dirname + path, 'utf8', (err, data) =>  // https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname
      {
          if (err)
          {
              response.writeHead(404);
              response.write("404 - Not found: File does not exist.");
          }
          else 
          {
              response.writeHead(200, {"Content-Type": "text/html"});
              response.write(data);
              console.log(data);
          }
          response.end();
      });
  }
  else
  {
      response.writeHead(404);
      response.write("404 - Not found: File does not exist.");
      response.end();
  }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  })