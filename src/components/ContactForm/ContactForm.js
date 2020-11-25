import React, { Component } from "react";
import { v4 as uuid4 } from "uuid";

const INITIAL_STATE = {
  name: "",
  number: "",
  id: "",
};
export default class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    this.setState({
      id: uuid4(),
      [target.name]: target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    // console.log(`      name: ${name}    `);
    this.props.addContact({ ...this.state });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name</label>
          <input type="text" name="name" value={name} placeholder="name" onChange={this.handleChange} />

          <label htmlFor="number"> Number</label>
          <input type="tel" name="number" value={number} placeholder="number" onChange={this.handleChange} />

          <input type="submit" value="Add contuct" />
        </form>
      </div>
    );
  }
}
