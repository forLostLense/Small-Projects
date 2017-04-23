var React = require('react');

var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var Greeter = React.createClass({
  // get default props
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from a component'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function() {
    // pull out the props
    var name = this.state.name;
    var message = this.state.message;
    // return React.createElement(
    //   'h1',
    //   null,
    //   'Hello React.createElement'
    // )
    return (
      // Only one root html element to render
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
}); //Most common react method
// anybody requires greeter will get access to the greeter function
module.exports = Greeter;
