import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const reactLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
});
export const { bootstrap, mount, unmount } = reactLifeCycles;