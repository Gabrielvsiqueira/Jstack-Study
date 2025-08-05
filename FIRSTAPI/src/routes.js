const userController = require('./controllers/UserControllers.js');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: userController.listUsers
  },
    {
    endpoint: '/produtos',
    method: 'GET',
    handler: userController.listUsers
  },
]