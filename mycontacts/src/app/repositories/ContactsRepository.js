const { v4} = require('uuid');

const  contacts = [
  {
    id: v4(),
    name: 'Gabriel Vitor',
    email: 'gabriel@mail.com',
    phone: '0000-0000',
    category_id: v4(),
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