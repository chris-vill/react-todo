import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => {

  return pug`
    button(onClick=${onClick}) ${text}
  `;
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
};

export default Button;
