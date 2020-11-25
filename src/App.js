import React, { Component } from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import ContactList from "../src/components/ContactList/ContactList";
import Filter from "../src/components/Filter/Filter";
// import PropTypes from 'prop-types'
const contactList = [];
export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state = {
    contacts: [...contactList],
    filter: "",
  };
  toAddContact = (el) => {
    this.setState((prev) => {
      const updateState = [...prev.contacts, el];
      console.log({ contacts: updateState });
      return { contacts: updateState };
    });
  };
  filterRender = (filter) => {
    this.setState({ filter });
  };
  filterTask = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  render() {
    const { contacts, filter } = this.state;
    const filterText = this.filterTask();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.toAddContact} />
        <h2>Contacts</h2>
        {contacts.length >= 1 && <Filter value={filter} filterRender={this.filterRender} />}
        <ul>
          {filterText.map((el) => {
            return <ContactList key={el.id} list={el} />;
          })}
        </ul>
      </div>
    );
  }
}
