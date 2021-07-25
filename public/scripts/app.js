console.log('App.js is running');


var template = React.createElement("p", null, "Hello React");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);