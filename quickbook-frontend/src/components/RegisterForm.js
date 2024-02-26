import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";

const onFinish = async (values) => {
  try {
    const response = await axios.post("http://localhost:8090/register", values);
    console.log("Registration successful:", response.data);
    const res = response.data;
    if (res.success) {
      message.success(res.message);
    } else {
      message.error(res.message);
    }
  } catch (error) {
    //   console.log('Success:', values);

    console.error("Form submission failed:", error);
    message.error("Form submission failed. Please try again later.");
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const handleClose = () => {};

const RegisterForm = () => (
  <div className="popup">
    <div className="popup-inner">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            color: "black",
          }}
        >
          {" "}
          Register now!
        </h3>
        <button onClick={handleClose} style={{ padding: "5px" }}>
          x
        </button>
      </div>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default RegisterForm;
