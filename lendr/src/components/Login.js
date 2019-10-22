import React, { useState, useEffect } from 'react';
import { Button, Label } from 'reactstrap';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css'

const UserLogin = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

  return (
    <Form className='login-form'>
      <Label for='username' className='login-text'>Username</Label>
      <Field type='text' name='username' placeholder='Enter your Username' autoComplete='username' className='login-field'></Field>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
      <Label for='password' className='login-text'>Password</Label>
      <Field type='password' name='password' placeholder='Enter your Password' autoComplete='current-password' className='login-field'></Field>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
      <Button type='submit' className='submit'>Submit</Button>
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