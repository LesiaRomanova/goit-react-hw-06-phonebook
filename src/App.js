import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './component/ContactList';
import Filter from './component/Filter';
import ContactForm from './component/ContactForm';

export default class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  // componentDidMount() {
  //   console.log('App componentDidMaunt');

  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('Обновилось поле contacts');

  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // addContact = task => {
  //   const searchSameName = this.state.contacts
  //     .map(cont => cont.name)
  //     .includes(task.name);

  //   if (searchSameName) {
  //     alert(`${task.name} is already in contacts`);
  //   } else if (task.name.length === 0) {
  //     alert('Fields must be filled!');
  //   } else {
  //     const contact = {
  //       ...task,
  //       id: uuidv4(),
  //     };

  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   }
  // };

  // changeFilter = filter => {
  //   this.setState({ filter });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter(contacts =>
  //     contacts.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  // removeContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  //     };
  //   });
  // };

  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
        // onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        {/* <Filter value={filter} onChangeFilter={this.changeFilter} /> */}
        <Filter />
        <ContactList
        // contacts={visibleContacts}
        // onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}
