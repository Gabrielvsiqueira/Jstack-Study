const userController = require('./controllers/UserControllers.js');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: userController.listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: userController.getUserById
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: userController.createUser
  },
]