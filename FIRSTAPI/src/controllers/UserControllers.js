const { request } = require('http');
const users = require('../mocks/users.js');

module.exports = {
  listUsers(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(users));
  },
  getUserById(request, response) {
    const { id } = request.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user){
      response.writeHead(400, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({Error: `user with id ${id} not found`}));
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify( user));
    }
  }
}