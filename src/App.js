import React, { Component } from "react";
import ContactForm from "../src/components/ContactForm/ContactForm";
import ContactList from "../src/components/ContactList/ContactList";
import Filter from "../src/components/Filter/Filter";
import styles from "./App.module.css";
// import PropTypes from 'prop-types'

export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state = {
    contacts: [],
    filter: "",
  };
  toAddContact = (el) => {
    const rule = this.state.contacts.some((contact) => contact.name === el.name);
    if (rule) {
      return alert(`${el.name} уже есть`);
    } else if (el.name.length >= 1) {
      this.setState((prev) => {
        const updateState = [...prev.contacts, el];
        return { contacts: updateState };
      });
    }
  };
  filterRender = (filter) => {
    this.setState({ filter });
  };
  filterTask = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  toDelete = (id) => {
    const { contacts } = this.state;
    const obj = contacts.find((el) => el.id === id);
    const index = contacts.indexOf(obj);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.slice(0, index), ...prevState.contacts.slice(index + 1)],
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filterText = this.filterTask();
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm addContact={this.toAddContact} />
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length > 1 && <Filter value={filter} filterRender={this.filterRender} />}
        <ContactList list={filterText} toDelete={this.toDelete} />
      </div>
    );
  }
}
