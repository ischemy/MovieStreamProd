import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avengers from "../assets/image/Avenger infinity war.jpg";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function Detail() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="mt-5">
        <div class="container mb-5">
          <div class="row">
            <iframe
              width="560"
              height="600"
              src="https://www.youtube.com/embed/6ZfuNTqbHE8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="mb-5"
              data-aos="zoom-in"
            ></iframe>
            <h2
              class="main-font text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Avengers : Infinity War
            </h2>
            <h3
              class="main-font text-white"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Rating 9 out of 10
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              animi soluta sapiente perferendis! Ut dolore, eligendi culpa
              similique tempora fugit cupiditate saepe laboriosam nisi, odit qui
              eum blanditiis accusamus dicta. Dolorum eaque corrupti, at ratione
              aspernatur omnis expedita excepturi, tenetur fugit assumenda
              corporis, aliquid ex quisquam rem a ullam aperiam praesentium et
              quas provident dicta. Voluptatum nesciunt itaque officia impedit.
              Doloribus quos neque quia sint assumenda et, alias harum natus
              eius voluptatem rerum ex itaque repudiandae commodi blanditiis!
              Non, provident sapiente voluptatum minus repellat doloremque cum.
              Est maiores sequi cum! Tempora harum facilis dolorum ad adipisci
              corporis! Ipsum eligendi aut nisi laborum possimus, cupiditate quo
              aliquid vel earum distinctio nostrum sapiente repellendus unde
              architecto consectetur. Nam doloremque numquam atque id. Nemo,
              nostrum aspernatur sunt possimus ipsum aliquid aut. Dicta, fugit.
              Eligendi quis, repudiandae itaque unde consequuntur expedita
              obcaecati earum fugiat, sit facilis voluptates ducimus
              necessitatibus? Commodi ratione ab repellat natus! Possimus
              explicabo distinctio, eligendi laborum tempora minus nulla quaerat
              ullam laudantium illum voluptas amet, excepturi expedita
              repellendus nesciunt dolore perferendis a? Obcaecati quae magni
              odio? Natus modi tenetur qui et.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Detail;
