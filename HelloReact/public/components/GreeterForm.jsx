var React = require('react');
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
    this.props.onNewData(updates);


  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" placeholder="Enter your name" ref="name"/>
          </div>
          <div>
            <textarea type="text" placeholder="Enter your message" ref="message"/>
          </div>
          <div>
            <button> Submit </button>
          </div>
        </form>
      </div>
    );
  }
});
module.exports = GreeterForm;
