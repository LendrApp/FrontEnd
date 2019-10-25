import React from "react";
// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome";
import Register from "./components/Register/Register";
import Login from "./components/Login";
import ExampleComponent from "./components/ExampleComponent/ExampleComponent";
import LendItemsContainer from "./components/LendItems/LendItemsContainer";
import AvailableItems from "./components/AvailableItems/AvailableItems";
import Dashboard from "./components/Dashboard/Dashboard";
import EditItems from "./components/LendItems/EditItems";

import { Route } from "react-router-dom";
import PrivateRoute from "./utils/authRouter";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Welcome} />
      <PrivateRoute exact path="/secret" component={ExampleComponent} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/items" component={LendItemsContainer} />
      <PrivateRoute
        exact
        path="/dashboard/:id/edit-items"
        component={EditItems}
      />
      <PrivateRoute exact path="/available-items" component={AvailableItems} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
