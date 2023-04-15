import Button from "react-bootstrap/Button";
import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const URL_API = "https://api.themoviedb.org/3";
  const API_KEY = "560d2707c1f25f499312a978ad129c74";

  function handleLogin() {
    axios({
      method: "get",
      url: `${URL_API}/authentication/token/new?api_key=${API_KEY}`,
    }).then(function (response) {
      axios({
        method: "post",
        url: `${URL_API}/authentication/token/validate_with_login?api_key=${API_KEY}`,
        data: {
          username: username,
          password: password,
          request_token: response.data.request_token,
        },
      }).then(function (response2) {
        axios({
          method: "post",
          url: `${URL_API}/authentication/session/new?api_key=${API_KEY}`,
          data: {
            request_token: response2.data.request_token,
          },
        }).then(function (response3) {
          localStorage.setItem(
            "user-info",
            JSON.stringify(response3.data.session_id)
          );
          axios({
            method: "post",
            url: `${URL_API}/account?api_key=${API_KEY}`,
            data: {
              params: { session_id: response3.data.session_id },
            },
          }).then(function (response4) {
            window.location.reload();
            console.log(response4);
          });
        });
      });
    });
  }
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="usernamefc">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordfc">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoFocus
            required
          />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" onClick={handleLogin()}>
        Login
      </Button>
    </>
  );
}

export default LoginForm;
