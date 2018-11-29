console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is the some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Bruno</h1>
        <p>Age: 18</p>
        <p>Location: Washington</p>
        <p></p>
    </div>
)

var appRoot = document.getElementById('App');

ReactDOM.render(template, appRoot);