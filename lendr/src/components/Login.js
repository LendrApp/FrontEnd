import React, { useState, useEffect } from "react";
import { Button, Label } from "reactstrap";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../App.css";
import { connect } from "react-redux";
import { login } from "../store/actions";

const UserLogin = ({ errors, touched, token, history }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  useEffect(() => {
    if (token) {
      history.push("./dashboard");
    }
    // status && setUser(user => [...user, status]);
  }, [history, token]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    if (user.username && user.password) {
      login(user);
      setUser({ username: "", password: "" });
    }
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Form onChange={handleChange}>
      <Label for="username">Username</Label>
      <Field
        type="text"
        name="username"
        placeholder="Enter your Username"
        autoComplete="username"
        value={user.username}
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
        value={user.password}
      ></Field>
      {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
      )}
      <Button onClick={e => handleSubmit(e)} type="submit">
        Submit
      </Button>
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

  // handleSubmit(values, { setStatus }) {
  //   axios
  //     .post("https://lenders-app.herokuapp.com/api/auth/login", values)
  //     .then(res => {
  //       setStatus(res.data);
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err.response));
  // }
})(UserLogin);

const mapStateToProps = state => {
  return {
    token: state.token
    // fetching: state.itemReducer.fetching,
    // error: state.itemReducer.error
  };
};
export default connect(
  mapStateToProps,
  { login }
)(LoginWithFormik);
