const { request } = require('http');
const users = require('../mocks/users.js');

module.exports = {
  listUsers(request, response) {

    response.send(200, users);
  },

  getUserById(request, response) {
    const { id } = request.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user){
      return response.send(400, {Error: "User not found"});
    } 
    
    response.send(200, user);
  },

  createUser(request, response) {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk
    })

    request.on('end', () => {
      body = JSON.parse(body);

      const lastUserId = users[users.length -1]?.id || 0;
      const newUser = {
        id: lastUserId + 1,
        name: body.name,
      }

      users.push(newUser);

      response.send(200, newUser);
    })
  }
}