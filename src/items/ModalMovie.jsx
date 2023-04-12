import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import axios from "axios";

function ModalItem() {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image width={465} src={img_path + movie.poster_path}></Image>
        <br />
        {movie.overview}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" href={`/detail/:id`}>
          Play
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Watchlist
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalItem;
