import React, { useState, useEffect } from 'react';
import { Button, Label } from 'reactstrap';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// username and password only

const UserLogin = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

  return (
    <Form>
      <Label for='username'>Username</Label>
      <Field type='text' name='username' placeholder='Enter your Username' autoComplete='username'></Field>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
      <Label for='password'>Password</Label>
      <Field type='password' name='password' placeholder='Enter your Password' autoComplete='current-password'></Field>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

const Login = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username!'),
    password: Yup.string().required('Please enter a password!'),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(UserLogin);

export default Login;