import React, { useState } from "react";
import { Alert, Form, Input } from "antd";
import * as auth from "auth/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [hasError, setHasError] = useState(false);

  const onFinish = async (values: any) => {
    try {
      const response = await auth.authenticate(values);
      if (response.data) {
        history.replace("/");
      }
    } catch (err) {
      console.log(err);
      setHasError(true);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      style={{ padding: "100px 30px" }}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder={"Your email..."} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your passwrd!" }]}
      >
        <Input type={"password"} placeholder={"Your password..."} />
      </Form.Item>
      {hasError && <Alert type={"error"} message={"Login failed"} />}
      <div className={"actions"}>
        <button
          className={"secondary"}
          onClick={() => history.replace("/signup")}
        >
          Sign Up
        </button>
        <button className={"primary"}>Login</button>
      </div>
    </Form>
  );
};
export default Login;
