import React, { useState } from "react";
import { Alert, Form, Input } from "antd";
import * as api from "api/apiFunctions";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const onFinish = async (values: any) => {
    setHasError(false);
    try {
      const response = await api.signup(values);
      if (response.data) {
        setHasSuccess(true);
      }
    } catch (err) {
      setHasError(true);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      autoComplete={"off"}
      style={{ padding: "100px 30px" }}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {!hasSuccess && (
        <>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder={"Your name..."} />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder={"Your last name..."} />
          </Form.Item>
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
        </>
      )}

      {hasSuccess && (
        <Alert type={"success"} message={"You have succesfully signed up"} />
      )}
      {hasError && <Alert type={"error"} message={"Signup failed"} />}
      <div className={"actions"}>
        {!hasSuccess ? (
          <>
            <button
              className={"secondary"}
              onClick={() => history.replace("login")}
            >
              I am a user
            </button>
            <button className={"primary"}>Save</button>
          </>
        ) : (
          <button
            className={"primary"}
            onClick={() => history.replace("login")}
          >
            Let's login
          </button>
        )}
      </div>
    </Form>
  );
};
export default Signup;
