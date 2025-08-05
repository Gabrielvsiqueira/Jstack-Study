const http = require('http');

const routes = require('./routes');

const server = http.createServer((request, response) => {
  
  console.log(`request method ${request.method} | request url ${request.url}`)
  
  const route = routes.find((routeObj) => (
    routeObj.endpoint === request.url && routeObj.method === request.method
  ));

  if (route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type' :  'text/html'});
    response.write(`Cannot ${request.method} ${request.url}`);
  }

})

server.listen(3000, () => console.log('🔥 Server is running on port 3000'));