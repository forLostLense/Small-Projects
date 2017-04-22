var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var updates ={};
    // updates.name = this.state.name;
    // updates.message = this.props.message;
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewName(updates);


  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type = "text" ref="name"/>
          <input type = "text" ref="message"/>
          <button> Submit </button>
        </form>
      </div>
    );
  }
});

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
  handleNewName: function (updates) {
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
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
}); //Most common react method

// var firstName = 'Jiawen';
// var message = "cherish"
// Extension file for React with js code inside, most common react dom method
ReactDOM.render(
  // prop passed in: name
  // prop is initialized as we create the element
  <Greeter />,
  document.getElementById('app')
);