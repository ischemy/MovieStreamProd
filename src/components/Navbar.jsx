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
import LoginForm from "../items/LoginForm";
import ModalProfile from "../items/ModalProfile";

function Navigationbar() {
  const isLogin = JSON.parse(localStorage.getItem("user-info"));

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
                {!isLogin ? (
                  <Nav.Link>
                    <LoginForm />
                  </Nav.Link>
                ) : (
                  <ModalProfile />
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navigationbar;
