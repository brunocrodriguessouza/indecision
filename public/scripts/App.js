'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is the some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Bruno'
    ),
    React.createElement(
        'p',
        null,
        'Age: 18'
    ),
    React.createElement(
        'p',
        null,
        'Location: Washington'
    ),
    React.createElement('p', null)
);

var appRoot = document.getElementById('App');

ReactDOM.render(template, appRoot);
