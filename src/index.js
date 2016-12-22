import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/css/style.css';

const Component = function (props) {
  return <div>Hello World!</div>;
};

ReactDOM.render(
  <Component />,
  document.getElementById('content')
);
