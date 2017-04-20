var Counter = React.createClass({
  // default props
  getDefaultProps: function() {
    return {
      numCount: 0,
      message: "Click the button to count!"
    };
  },
  getInitialState: function() {
    return {
      numCount: this.props.numCount
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();
    var numCount = this.state.numCount;
    var new_numCount= numCount+1
    this.setState({
      numCount: new_numCount

    });
  },
  onButtonClear: function(e) {
    e.preventDefault();
    this.setState({
      numCount: 0
    });
  },

  render:function() {
    var numCount = this.state.numCount;
    var message = this.props.message;
    return (
      <div>
        <h1>
          Number of counts is {numCount}
        </h1>
        <p>
          {message}
        </p>
        <button onClick={this.onButtonClick}> Click! </button>
        <p>
          Clear the counts!
        </p>
        <button onClick={this.onButtonClear}> Clear! </button>
      </div>

    );
  }
}

);

var numCount = 0;
var message = "Click the button to count!";
ReactDOM.render(
  <Counter count = {numCount} message = {message}/>, document.getElementById('app')
);
