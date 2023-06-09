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
  const [show, setShow] = useState();
  const [moviedata, setMovieData] = useState([]);

  const img_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const URL_API = "https://api.themoviedb.org/3";
  const API_KEY = "560d2707c1f25f499312a978ad129c74";
  const user = JSON.parse(localStorage.getItem("detail-account"));
  const isLogin = JSON.parse(localStorage.getItem("user-info"));

  const handleShow = (id) => setShow(id);
  const handleClose = () => setShow(false);

  function AddToWatchlist(id) {
    axios({
      method: "post",
      url: `${URL_API}/account/${user.id}/watchlist`,
      data: {
        media_id: id,
        watchlist: true,
        media_type: "movie",
      },
      params: {
        api_key: API_KEY,
        session_id: isLogin,
      },
    }).then(function (response) {
      console.log(response);
    });
  }

  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/movie/popular?api_key=${API_KEY}`,
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
                  onClick={() => handleShow(movie.id)}
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

                <Modal show={show === movie.id} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h1>Movie ID : {movie.id}</h1>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h2> {movie.title}</h2>
                    <Image
                      width={465}
                      height={350}
                      src={img_path + movie.poster_path}
                    ></Image>
                    <br />
                    <h3>Movie Popularity : {movie.popularity}</h3>
                    <br />
                    {movie.overview}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" href={`/detail/${movie.id}`}>
                      Play
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={(e) => AddToWatchlist(movie.id)}
                    >
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
