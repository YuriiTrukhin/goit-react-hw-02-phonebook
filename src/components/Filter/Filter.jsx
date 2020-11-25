import React, { Component } from "react";
// import PropTypes from 'prop-types'
const Filter = function ({ filterRender, filter }) {
  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" value={filter} onChange={(e) => filterRender(e.target.value)} />
    </div>
  );
};
export default Filter;
