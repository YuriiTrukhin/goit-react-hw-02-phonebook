import React, { Component } from "react";
// import PropTypes from 'prop-types'

export default class ContactList extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  render() {
    console.log(this.props.list);
    return (
      <>
        <li>
          {this.props.list.name}:{this.props.list.number}
        </li>
      </>
    );
  }
}
