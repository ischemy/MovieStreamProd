import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import "../main.css";

function ModalProfile() {
  const [show, setShow] = useState();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }
  const user = JSON.parse(localStorage.getItem("detail-account"));

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        {user.username}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello, {user.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2> Do You Want To Logout ? </h2>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProfile;
