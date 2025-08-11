const { uuid} = require('uuidv4');

const  contacts = [
  {
    id: uuid(),
    name: 'Gabriel Vitor',
    email: 'gabriel@mail.com',
    phone: '0000-0000',
    category_id: uuid(),
  },
]

class ContactsRepository {
  findAll(){
    return new Promise ((resolve) => {
        resolve(contacts);
    })
  }
}

module.exports = new ContactsRepository();