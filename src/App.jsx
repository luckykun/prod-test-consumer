import React from "react";
import ReactDOM from "react-dom";
import Header from 'header/Header';

import "./index.css";

const App = () => (
  <div>
    <Header></Header>
    <div>i'm the consumer app.</div>
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));
