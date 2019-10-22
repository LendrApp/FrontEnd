import React from "react";
import { Card, CardTitle, CardGroup, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Welcome = () => {
  return (
    <div>
      <header className="header-contain">
        <h1 className="welcome-header">Welcome to Lendr!</h1>
      </header>
      <CardGroup>
        <Card className="card">
          <CardBody className="card-body">
            <CardTitle className="card-text">
              Log In to an existing Lendr account
            </CardTitle>
            <Link to="/Login" className="card-link">
              Log In
            </Link>
          </CardBody>
        </Card>
        <Card className="card">
          <CardBody className="card-body">
            <CardTitle className="card-text">Register as a new user</CardTitle>
            <Link to="/Register" className="card-link">
              Register
            </Link>
          </CardBody>
        </Card>
      </CardGroup>
      {/* <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img> */}
    </div>
  );
};
export default Welcome;
