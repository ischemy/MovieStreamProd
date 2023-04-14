import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="emailfc">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordfc">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            autoFocus
          />
        </Form.Group>
      </Form>
      <Button onClick={login} variant="primary">
        Login
      </Button>
    </>
  );
}

export default LoginForm;
