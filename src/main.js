import React from 'react';
import ReactDom from 'react-dom';
import './main.styl';

import MainView from './components/MainView';

ReactDom.render(
  pug`
    section
      MainView
  `,
  document.querySelector('#root')
);
