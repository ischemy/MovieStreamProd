import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avengers from "../assets/image/Avenger infinity war.jpg";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function Watchlist() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="mt-5">
        <div className="container mt-5 mb-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href={"/"} className="text-white">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-gray active"
                aria-current="page"
              >
                WatchList
              </li>
            </ol>
          </nav>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="150">
            <div className="card">
              <a href={"/detail"}>
                <div className="card-body d-flex">
                  <img
                    src="/style/image/Avenger infinity war.jpg"
                    alt="Thumbnail1"
                    width="273"
                    height="155"
                  />

                  <div className="ml-10-px col-6">
                    <h1 className="main-font text-dark ml-10-px">
                      Avenger : Infinity War
                    </h1>
                    <p className="main-font text-dark">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur alias, eaque tempore doloremque impedit porro
                      magni quos quasi quis quia laudantium! Placeat animi ex
                      cupiditate voluptatem eveniet, temporibus accusamus
                      aliquid! Illo dolorum voluptatibus est tempore alias
                      deserunt rem quam aspernatur ut ex, obcaecati maiores hic
                      animi sapiente eos et velit delectus praesentium libero ab
                      impedit? Totam recusandae accusantium aut quos. Illum nemo
                      asperiores odit qui nulla dicta praesentium, veniam
                      laborum eum libero, quisquam illo dolorem omnis distinctio
                      rem provident inventore adipisci aspernatur, harum sint
                      fugit. Optio aliquid cumque omnis quisquam. Cum impedit
                      accusamus dolores vitae facilis reprehenderit, officiis
                      est voluptatum unde in nisi quae suscipit consequatur
                      soluta esse odio non, cumque dolore aut rerum accusantium.
                      Eveniet fugiat itaque quaerat nulla.
                    </p>
                    <a href={"/detail"}>
                      <button type="button" className="btn btn-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-play"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                        </svg>
                        Play
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="150">
            <div className="card">
              <a href={"/detail"}>
                <div className="card-body d-flex">
                  <img
                    src="/style/image/Deadpool.jpg"
                    alt="Thumbnail1"
                    width="273"
                    height="155"
                  />

                  <div className="ml-10-px col-6">
                    <h1 className="main-font text-dark ml-10-px">Deadpool</h1>
                    <p className="main-font text-dark">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur alias, eaque tempore doloremque impedit porro
                      magni quos quasi quis quia laudantium! Placeat animi ex
                      cupiditate voluptatem eveniet, temporibus accusamus
                      aliquid! Illo dolorum voluptatibus est tempore alias
                      deserunt rem quam aspernatur ut ex, obcaecati maiores hic
                      animi sapiente eos et velit delectus praesentium libero ab
                      impedit? Totam recusandae accusantium aut quos. Illum nemo
                      asperiores odit qui nulla dicta praesentium, veniam
                      laborum eum libero, quisquam illo dolorem omnis distinctio
                      rem provident inventore adipisci aspernatur, harum sint
                      fugit. Optio aliquid cumque omnis quisquam. Cum impedit
                      accusamus dolores vitae facilis reprehenderit, officiis
                      est voluptatum unde in nisi quae suscipit consequatur
                      soluta esse odio non, cumque dolore aut rerum accusantium.
                      Eveniet fugiat itaque quaerat nulla.
                    </p>
                    <a href={"/detail"}>
                      <button type="button" className="btn btn-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-play"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                        </svg>
                        Play
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mb-5" data-aos="fade-up" data-aos-delay="150">
            <div className="card">
              <a href={"/detail"}>
                <div className="card-body d-flex">
                  <img
                    src="/style/image/if i stay.webp"
                    alt="Thumbnail1"
                    width="273"
                    height="155"
                  />

                  <div className="ml-10-px col-6">
                    <h1 className="main-font text-dark ml-10-px">if i stay</h1>
                    <p className="main-font text-dark">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur alias, eaque tempore doloremque impedit porro
                      magni quos quasi quis quia laudantium! Placeat animi ex
                      cupiditate voluptatem eveniet, temporibus accusamus
                      aliquid! Illo dolorum voluptatibus est tempore alias
                      deserunt rem quam aspernatur ut ex, obcaecati maiores hic
                      animi sapiente eos et velit delectus praesentium libero ab
                      impedit? Totam recusandae accusantium aut quos. Illum nemo
                      asperiores odit qui nulla dicta praesentium, veniam
                      laborum eum libero, quisquam illo dolorem omnis distinctio
                      rem provident inventore adipisci aspernatur, harum sint
                      fugit. Optio aliquid cumque omnis quisquam. Cum impedit
                      accusamus dolores vitae facilis reprehenderit, officiis
                      est voluptatum unde in nisi quae suscipit consequatur
                      soluta esse odio non, cumque dolore aut rerum accusantium.
                      Eveniet fugiat itaque quaerat nulla.
                    </p>
                    <a href={"/detail"}>
                      <button type="button" className="btn btn-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-play"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                        </svg>
                        Play
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mb-5" data-aos="fade-up" data-aos-delay="150">
            <div className="card">
              <a href={"/detail"}>
                <div className="card-body d-flex">
                  <img
                    src="/style/image/Crows Zero 2.jpg"
                    alt="Thumbnail1"
                    width="273"
                    height="155"
                  />

                  <div className="ml-10-px col-6">
                    <h1 className="main-font text-dark ml-10-px">
                      Crows Zero 2
                    </h1>
                    <p className="main-font text-dark">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur alias, eaque tempore doloremque impedit porro
                      magni quos quasi quis quia laudantium! Placeat animi ex
                      cupiditate voluptatem eveniet, temporibus accusamus
                      aliquid! Illo dolorum voluptatibus est tempore alias
                      deserunt rem quam aspernatur ut ex, obcaecati maiores hic
                      animi sapiente eos et velit delectus praesentium libero ab
                      impedit? Totam recusandae accusantium aut quos. Illum nemo
                      asperiores odit qui nulla dicta praesentium, veniam
                      laborum eum libero, quisquam illo dolorem omnis distinctio
                      rem provident inventore adipisci aspernatur, harum sint
                      fugit. Optio aliquid cumque omnis quisquam. Cum impedit
                      accusamus dolores vitae facilis reprehenderit, officiis
                      est voluptatum unde in nisi quae suscipit consequatur
                      soluta esse odio non, cumque dolore aut rerum accusantium.
                      Eveniet fugiat itaque quaerat nulla.
                    </p>
                    <a href={"/detail"}>
                      <button type="button" className="btn btn-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-play"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                        </svg>
                        Play
                      </button>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Watchlist;
