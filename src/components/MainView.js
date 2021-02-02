import React from 'react';

import Button from './Button';
import List from './List';

// FOR TESTING
const _itemList = [
  {
    name: "Sample A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Sample B",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Sample C",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const showCreateForm = (asd) => {
  console.log("SHOW CREATE FORM");
  console.log(asd);
}

const showItem = (asd) => {
  console.log("SHOW ITEM");
  console.log(asd);
}

const showEditForm = (asd) => {
  console.log("SHOW EDIT FORM");
  console.log(asd);
}

const deleteItem = (asd) => {
  console.log("DELETE ITEM");
  console.log(asd);
}

const MainView = () => pug`
  Button(onClick=showCreateForm text='Create')
  List(itemList=_itemList showItem=showItem showEditForm=showEditForm deleteItem=deleteItem)
`

export default MainView;
