import React from 'react';
import PropTypes from 'prop-types';

const App = ({ number, title, plus, minus }) => (
  <div>
    <h2>{title}</h2>
    <h3>number : {number}</h3>
    <button onClick={() => { plus(10); }} > + 10 </button>
    <button onClick={() => { plus(1); }} > + 1 </button>
    <button onClick={() => { minus(1); }} > - 1 </button>
    <button onClick={() => { minus(10); }} > - 10 </button>
  </div>
);

App.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};

export default App;
