function greeter () {
  document.write("From greeter function");
}

// anybody requires greeter will get access to the greeter function
module.exports = greeter;
