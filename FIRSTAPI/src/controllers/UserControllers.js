const { request } = require('http');
const users = require('../mocks/users.js');

module.exports = {
  listUsers(request, response) {

    response.send(400, users);
  },
  getUserById(request, response) {
    const { id } = request.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user){
      return response.send(400, {Error: "User not found"});
    } 
    
    response.send(400, user);

  }
}