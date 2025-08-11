const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {

  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
     // Obter um registro
     const { id } = request.params;
     const contact = await ContactsRepository.findByid(id);

     if (!contact) {
      return response.status(404).json({ error: 'Contact not found' } );
     } else {
      response.json(contact);
     }
   }

   // store() {
     // Criar novo registro
   // }

  // update(request, response) {
  //   // Editar um registro
  // }

   async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findByid(id);

    if (!contact ) {
      return response.status(404).json({ error: 'Contact not found' } );
     }
     await ContactsRepository.delete(id);
     response.sendStatus(204);
   }
}

module.exports = new ContactController();



