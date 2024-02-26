import React from "react";
import { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import "./loginForm.css"; // to set the login form at the center of the page
import RegisterForm from "./RegisterForm";

const App = ({ onLoginToggle, onLoggedInToggle }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const onFinish = async (values) => {
    console.log(values);

    try {
      let response;
      if (showRegisterForm) {
        // Submit registration form
        response = await axios.post("http://localhost:8090/register", values);
        console.log("Registration successful:", response.data);
        const res = response.data;
        if (res.success) {
          message.success(res.message);
        } else {
          message.error(res.message);
        }
        // message.success('Registration successful!');
      } else {
        // Submit login form
        response = await axios.post("http://localhost:8090/login", values);
        console.log("Login successful:", response.data);
        const res = response.data;
        if (res.success) {
          message.success(res.message);
          onLoggedInToggle();
        } else {
          message.error(res.message);
        }
        // message.success('Login successful!');
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      message.error("Form submission failed. Please try again later.");
    }

    // const response  = await axios.post('http://localhost:8090/login', values, {
    //     headers:{"Content-Type":"application/json"}
    // })
    // console.log(response);
    // const res = response.data;
    // if(res.success){
    //     message.success(res.message);
    // }
    // else{
    //     message.error(res.message);
    // }
    // message.success("You are registered");
    // message.error("Error occurred");
  };

  const handleClose = () => {
    onLoginToggle();
  };
  const handleRegisterClick = () => {
    // Show the RegisterForm component when register button is clicked
    setShowRegisterForm(true);
  };
  return (
    <div>
      {!showRegisterForm ? (
        <div className="popup">
          <div className="popup-inner">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  color: "black",
                }}
              >
                {" "}
                Welcome to QuickBook! Login or create an account now!
              </h3>
              <button onClick={handleClose} style={{ padding: "5px" }}>
                x
              </button>
            </div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              {/* <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item> */}
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

              <Form.Item>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Login
                  </Button>
                  {/* <br></br> */}
                  <p
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    Or
                  </p>
                  {/* Or <a href={RegisterForm}>register now!</a> */}
                  <Button
                    onClick={handleRegisterClick}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Register now!
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};
export default App;
