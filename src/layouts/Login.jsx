import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import LoginForm from "../items/LoginForm";


function Login() {
  return (
    <>
      <Container className="mt-5">
        <LoginForm />
      </Container>
    </>
  );
}

export default Login;
