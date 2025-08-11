const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {

  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // show(request, response) {
  //   // Obter um registro
  // }

  // store(request, response) {
  //   // Criar novo registro
  // }

  // update(request, response) {
  //   // Editar um registro
  // }

  // delete(request, response) {
    // Deletar um registro
  // }
}

module.exports = new ContactController();



