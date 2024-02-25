import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './PhoneBook.css';

const PhoneBook = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Zа-яА-Я]+([' -]?[a-zA-Zа-яА-Я]+)*$/;
    return nameRegex.test(name);
  };

  const validateNumber = (number) => {
    const numberRegex = /^\+?\d{1,4}?([-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}){1,2}([-.\s]?\d{1,9})?$/;
    return numberRegex.test(number);
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      alert('Please enter a valid name.');
      return;
    }
    if (!validateNumber(number)) {
      alert('Please enter a valid phone number.');
      return;
    }
    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter phone number"
        />
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name} - {contact.number}</li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneBook;
