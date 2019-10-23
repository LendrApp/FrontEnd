import React, { useState, useEffect } from "react";
import { Button, Label } from "reactstrap";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
// import axios from "axios";
import "../App.css";

import { connect } from "react-redux";

import { logInUser } from "../../src/store/actions";

const UserLogin = ({ touched, errors, logInUser, history, token }) => {
  const [user, setUser] = useState({
    userName: "",
    password: ""
  });

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [history, token]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.username && user.password) {
      logInUser(user);
      setUser({ username: "", password: "" });
    }
  };

  return (
    <Form onChange={handleChange}>
      <Label for="username">Username</Label>
      <Field
        type="text"
        name="username"
        placeholder="Enter your Username"
        autoComplete="username"
      ></Field>
      {touched.username && errors.username && (
        <p className="error">{errors.username}</p>
      )}
      <Label for="password">Password</Label>
      <Field
        type="password"
        name="password"
        placeholder="Enter your Password"
        autoComplete="current-password"
      ></Field>
      {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
      )}
      <Button type="submit" onClick={e => handleSubmit(e)}>
        Submit
      </Button>
      <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img>
    </Form>
  );
};

const LoginWithFormik = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username!"),
    password: Yup.string().required("Please enter a password!")
  })
})(UserLogin);

const mapStateToProps = state => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token
  };
};
export default connect(
  mapStateToProps,
  { logInUser: logInUser }
)(LoginWithFormik);
