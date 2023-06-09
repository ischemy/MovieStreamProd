import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avengers from "../assets/image/Avenger infinity war.jpg";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Detail() {
  const [moviedata, setMovieData] = useState([]);

  const img_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const URL_API = "https://api.themoviedb.org/3";
  const API_KEY = "560d2707c1f25f499312a978ad129c74";
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: `${URL_API}/movie/${id}?api_key=${API_KEY}`,
    }).then(function (response) {
      console.log(response.data);
      setMovieData(response.data);
    });
  }, []);
  return (
    <>
      <Container className="mt-5">
        <div class="container mb-5">
          <div class="row">
            <img
              width="560"
              height="600"
              src={img_path + moviedata.poster_path}
              class="mb-5"
              data-aos="zoom-in"
            ></img>
            <h2
              class="main-font text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {moviedata.title}
            </h2>
            <h3
              class="main-font text-white"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Popularity: {moviedata.popularity}
            </h3>
            <h4
              class="main-font text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Synopsis
            </h4>
            <p
              class="main-font text-white"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {moviedata.overview}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Detail;
