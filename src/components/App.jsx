import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = (id) => { 
    this.setState(prev => ({ 
      contacts: prev.contacts.filter(contact => contact.id !== id)
    }))
  }

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <p>Find contacts by name:</p>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.filterContacts()} onDelete={ this.deleteContact} />
      </div>
    );
  }
}
