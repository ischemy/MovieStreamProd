import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import "../main.css";

import axios from "axios";

function ModalProfile() {
  const [show, setShow] = useState();
  const [profile, setProfile] = useState({});

  const handleShow = (id) => setShow(id);
  const handleClose = () => setShow(false);
  const img_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const URL_API = "https://api.themoviedb.org/3";
  const API_KEY = "560d2707c1f25f499312a978ad129c74";
  const isLogin = JSON.parse(localStorage.getItem("user-info"));
  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/account?api_key=${API_KEY}&session_id=${isLogin}`,
    }).then(function (response) {
      console.log(response.data);
      setProfile(response.data);
    });
  }, []);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Logout
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Are you sure you want to logout?? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ml-10 mr-6 d-flex gap-4">
            <Button onClick={handleLogout}>Yes</Button>
            <Button onClick={handleClose}>No</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProfile;
