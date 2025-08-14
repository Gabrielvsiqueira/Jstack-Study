const http = require('http');
const url = require('url');

const routes = require('./routes');

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  console.log(`request method ${request.method} | request url ${request.url}`);

  let{ pathname } = parsedUrl;
  let id = null;

  const sliptEndpoint = pathname.split('/').filter((Boolean));

  if(sliptEndpoint.length > 1) {
    pathname = `/${sliptEndpoint[0]}/:id`;
    id = sliptEndpoint[1];
  }
  
  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));

  if (route) {
    request.params = { id };


    response.send = () => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(body));
    }

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(body));
    };

    route.handler(request, response);

  } else {
    response.writeHead(404, { 'Content-Type' :  'text/html'});
    response.write(`Cannot ${request.method} ${request.url}`);
  }

})

server.listen(3000, () => console.log('🔥 Server is running on port 3000'));