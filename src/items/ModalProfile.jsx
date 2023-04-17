import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function ModalProfile() {
  const [show, setShow] = useState();
  const [profile, setProfile] = useState({});
  const handleShow = (id) => setShow(id);
  const handleClose = () => setShow(false);
  const img_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const URL_API = "https://api.themoviedb.org/3";
  const API_KEY = "560d2707c1f25f499312a978ad129c74";
  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }
  const isLogin = JSON.parse(localStorage.getItem("user-info"));

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/account?api_key=${API_KEY}&session_id=${isLogin}`,
    }).then(function (response) {
      console.log(response.object);
      setProfile(response.object);
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
            <h1>Profile</h1>
            {profile.map((usr) => {
              return (
                <>
                  <p>{usr.id}</p>
                  <p>{usr.username}</p>
                  <Button onClick={handleLogout}>Logout</Button>
                </>
              );
            })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProfile;
