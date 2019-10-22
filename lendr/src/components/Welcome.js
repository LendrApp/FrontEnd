import React from "react";
import { Card, CardTitle, CardGroup, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <header>
        <h1 className="welcome-header">Welcome to Lendr!</h1>
      </header>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle>Login to an existing Lendr account</CardTitle>
            <Link to="/Login">Login</Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Register as a new user</CardTitle>
            <Link to="/Register">Register</Link>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};
export default Welcome;
