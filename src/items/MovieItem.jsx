import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avengers from "../assets/image/Avenger infinity war.jpg";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import axios from "axios";

function MovieItem() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=560d2707c1f25f499312a978ad129c74",
    }).then(function (response) {
      console.log(response.data.results);
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <Row>
          <Card
            className="bg-transparent"
            style={{ width: "20rem" }}
            onClick={handleShow}
          >
            <Card.Img height={"350px"} variant="top" src={Avengers} />
            <Card.Body>
              <Card.Title className="text-center text-white main-font">
                Avengers Infinity War
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Avengers Infinity War</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image width={465} src={Avengers}></Image>
          <br />W Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Pariatur, quisquam hic non error tempora, aspernatur molestiae vel sed
          debitis quas tenetur expedita quia odio suscipit optio adipisci nemo
          recusandae ab? Quo, repellat ipsum aut ducimus perspiciatis
          consectetur natus eligendi pariatur culpa ab modi ut aspernatur nulla
          quos adipisci eaque fugiat rem dolorum praesentium vitae unde, et
          commodi optio accusamus! Nam? Nam illo ipsam adipisci, nobis
          reprehenderit officiis, dolor aperiam alias sequi ea perspiciatis
          tenetur iure facere reiciendis necessitatibus vel? Asperiores nihil
          perferendis commodi delectus excepturi incidunt laudantium veniam
          eaque qui?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Play
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Watchlist
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieItem;
