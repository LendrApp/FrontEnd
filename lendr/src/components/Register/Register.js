import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";

import { addUser } from "../../store/actions";

import "./Register.scss";

const Register = props => {
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        props.addUser(values);
        props.form.setFieldsValue({ username: "", password: "" });
        props.history.push(`/secret/${values.username}`);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };

  return (
    <div class="sign-up-container">
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <h2 className="sign-up">Sign Up</h2>
        <Form.Item label="User name">
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "Please input a username!"
              }
            ]
          })(<Input name="username" />)}
        </Form.Item>

        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              }
            ]
          })(<Input.Password name="password" />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const WrappedRegistrationForm = Form.create({ name: "register" })(Register);

export default connect(
  null,
  { addUser: addUser }
)(WrappedRegistrationForm);
