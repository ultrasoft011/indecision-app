console.log('App.js is running!')

//JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>;

var template = /*#__PURE__*/React.createElement("h1", {
    id: "someid"
  }, "Hello React world!");

var appRoot = document.getElementById('#app');

ReactDOM.render(template, appRoot);