const { v4} = require('uuid');

let  contacts = [
  {
    id: v4(),
    name: 'Gabriel Vitor',
    email: 'gabriel@mail.com',
    phone: '0000-0000',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Rafael',
    email: 'rafael@mail.com',
    phone: '0000-0000',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Diogo',
    email: 'diogo@mail.com',
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
  findByid(id){
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    })
  }
  delete(id) {
    return new Promise((resolve) => {
      resolve(contacts.filter((contact) => contact.id !== id));
      resolve();
    })
  }
}

module.exports = new ContactsRepository();