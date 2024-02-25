import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './PhoneBook.css';

const PhoneBook=() =>{
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const handleAddContact = (e) => {
    e.preventDefault();
    const newContact = { id: nanoid(), name };
    setContacts([...contacts, newContact]);
    setName('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' -]?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneBook;
