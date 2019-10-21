import React from "react";
import Welcome from "./components/Welcome";
import Register from "./components/Register/Register";
import Login from "./components/Login";

import { Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
