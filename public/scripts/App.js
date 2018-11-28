'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('App');

ReactDOM.render(template, appRoot);
