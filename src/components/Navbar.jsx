import Logo from "../assets/image/Logo.png";
import SearchIcon from "../assets/image/search.svg";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/esm/Image";
import React, { useState } from "react";

function Navigationbar() {
  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [toggleTwoModal, setToggleTwoModal] = useState(false);
  return (
    <>
      <div data-aos="fade-down">
        <Navbar bg="transparent" expand="lg">
          <Container fluid>
            <Navbar.Brand href={"/"}>
              <Image src={Logo}></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 px-5"
                  aria-label="Search"
                />
                <Button className="btn-light">
                  <Image src={SearchIcon}></Image>
                </Button>
              </Form>
              <Nav
                className="my-2 my-lg-0 ms-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href={"/"} className="main-font">
                  Home
                </Nav.Link>
                <Nav.Link href={"/watchlist"} className="main-font">
                  WatchList
                </Nav.Link>
                <Nav.Link href="">
                  <Button onClick={() => setToggleOneModal(!toggleOneModal)}>
                    Login
                  </Button>
                </Nav.Link>
                <Modal
                  show={toggleOneModal}
                  setShow={setToggleOneModal}
                  tabIndex="-1"
                >
                  <Modal.Header
                    closeButton
                    onClick={() => setToggleOneModal(!toggleOneModal)}
                  >
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="emailfc">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="passwordfc">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder=""
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                    <Button variant="primary">Login</Button>
                  </Modal.Body>
                  <Modal.Footer>
                    <p>Belum punya akun?</p>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setToggleOneModal(!toggleOneModal);
                        setTimeout(() => {
                          setToggleTwoModal(!toggleTwoModal);
                        }, 5);
                      }}
                    >
                      Register
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal
                  show={toggleTwoModal}
                  setShow={setToggleTwoModal}
                  tabIndex="-1"
                >
                  <Modal.Header
                    closeButton
                    onClick={() => setToggleTwoModal(!toggleTwoModal)}
                  >
                    <Modal.Title>Register</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="emailfc">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="passwordfc">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder=""
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="passwordfc">
                        <Form.Label>Re-Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder=""
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                    <Button variant="primary">Register</Button>
                  </Modal.Body>
                  <Modal.Footer>
                    <p>Sudah punya akun?</p>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setToggleTwoModal(!toggleTwoModal);
                        setTimeout(() => {
                          setToggleOneModal(!toggleOneModal);
                        }, 5);
                      }}
                    >
                      Login
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navigationbar;
