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
  const [moviedata, setMovieData] = useState([{}]);
  const img_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  function handleClose() {
    return setShow(false);
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=560d2707c1f25f499312a978ad129c74",
    }).then(function (response) {
      console.log(response.data.results);
      setMovieData(response.data.results);
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <Row>
          {moviedata.map((movie) => {
            return (
              <>
                <Card
                  className="bg-transparent"
                  style={{ width: "20rem" }}
                  onClick={handleShow}
                >
                  <Card.Img
                    height={"350px"}
                    variant="top"
                    src={img_path + movie.poster_path}
                  />
                  <Card.Body>
                    <Card.Title className="text-center text-white main-font">
                      {movie.title}
                    </Card.Title>
                  </Card.Body>
                </Card>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{movie.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Image
                      width={465}
                      src={img_path + movie.poster_path}
                    ></Image>
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
              </>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default MovieItem;
