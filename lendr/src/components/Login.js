import React, { useState, useEffect } from "react";
import { Button, Label } from "reactstrap";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../App.css";

const UserLogin = ({ errors, touched, history, token }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [history, token]);

  return (
    <Form>
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
      <Button type="submit">Submit</Button>
      <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img>
    </Form>
  );
};

const Login = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username!"),
    password: Yup.string().required("Please enter a password!")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://lenders-app.herokuapp.com/api/auth/login", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(UserLogin);

export default Login;
