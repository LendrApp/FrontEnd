import React from "react";
// COMPONENTS
import Welcome from "./components/Welcome";
import Register from "./components/Register/Register";
import Login from "./components/Login";
import ExampleComponent from "./components/ExampleComponent/ExampleComponent";
import LendItemsContainer from "./components/LendItems/LendItemsContainer";
import Dashboard from "./components/Dashboard";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/authRouter";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Welcome />
      <LendItemsContainer />
      <PrivateRoute path="/secret" component={ExampleComponent} />
      {/* <PrivateRoute exact path="/items" component={LendItemsContainer} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
