
import Container from "react-bootstrap/Container";

import React, { useState } from "react";

import MovieItem from "../items/MovieItem";

function Home() {
  return (
    <>
      <Container className="mt-5">
        <MovieItem />
      </Container>
    </>
  );
}

export default Home;
