import React from 'react';
import ReactDom from 'react-dom';
import './styles/main.styl';

ReactDom.render(
  pug`
    header
      h1 Hello
    section
      p Sample Text
  `,
  document.querySelector('#root')
);
