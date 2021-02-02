import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = ({ itemList, showItem, showEditForm, deleteItem }) => pug`
  ul
    ${itemList.map((item, i) => pug`
      ListItem(onClick=${showItem} id=${i} text=${item.name} key=${i})
    `)}
`;
List.propTypes = {
  showItem: PropTypes.func,
  showEditForm: PropTypes.func,
  deleteItem: PropTypes.func,
  itemList: PropTypes.array
};

export default List;
