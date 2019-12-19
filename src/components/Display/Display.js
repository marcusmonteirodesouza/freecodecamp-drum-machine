import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ text }) => {
  return <div>{text}</div>;
};

Display.propTypes = {
  text: PropTypes.string
};

export default Display;
