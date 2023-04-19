import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import "../main.css";

import axios from "axios";

function ModalProfile() {
  const [show, setShow] = useState();
  const [username, setUsername] = useState({});

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
      console.log(response.data.id);
      setUsername(response.data.username);
    });
  }, []);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Profile
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            Hello,{" "}
            {username.toString(() => {
              return <></>;
            })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Do You Want To Logout ? </h2>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProfile;
