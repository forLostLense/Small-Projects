var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

// var firstName = 'Jiawen';
// var message = "cherish"
var firstName = "Jiajia";
// Extension file for React with js code inside, most common react dom method
ReactDOM.render(
  // prop passed in: name
  // prop is initialized as we create the element
  <Greeter name = {firstName}/>,
  document.getElementById('app')
);


//Q & A
// A presentational component: a component that uses props to display information
// A container component: render its child components
