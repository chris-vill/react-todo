import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ onClick, id, text }) => pug`
  li(onClick=${onClick} key=${id}) ${text}
`;

ListItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.number
};

export default ListItem;
