import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState();
  const URL_API = "https://api.themoviedb.org/3";
  const API_KEY = "560d2707c1f25f499312a978ad129c74";
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function handleLogin(event) {
    event.preventDefault();
    axios({
      method: "get",
      url: `${URL_API}/authentication/token/new?api_key=${API_KEY}`,
    }).then(function (response) {
      console.log(response);
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
          console.log(response3.data.session_id);
          axios({
            method: "get",
            url: `${URL_API}/account?api_key=${API_KEY}`,
            params: { session_id: response3.data.session_id },
          }).then(function (response4) {
            localStorage.setItem(
              "detail-account",
              JSON.stringify(response4.data)
            );
            window.location.reload();
            console.log(response4.data);
          });
        });
      });
    });
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Login</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="usernamefc">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordfc">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoFocus
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginForm;
