const http = require('http');
const users = require('./mocks/users.js');

const server = http.createServer((request, response) => {
  
  console.log(`request method ${request.method} | request url ${request.url}`)
  
  if(request.url === '/users' && request.method === 'GET'){
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(users));
  } else 
  response.writeHead(200, { 'Content-Type' :  'text/html'});
  response.write(`Cannot ${request.method} ${request.url}`);
})

server.listen(3001, () => console.log('🔥 Server is running on port 3000'));