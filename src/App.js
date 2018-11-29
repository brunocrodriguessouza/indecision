console.log('App.js is running!');

// create app object title/subtitle
// user title/subtitle in the template
// render template 

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        { app.options.length > 0 && 
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>}
    </div>
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'Philadelphia'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        {(user.age>18) && <p>Age: {user.age}</p>}
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById('App');

ReactDOM.render(template, appRoot);