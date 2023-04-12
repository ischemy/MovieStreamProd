import Container from "react-bootstrap/Container";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Watchlist() {
  const [showWatchlist, setShowWatchlist] = useState([{}]);
  const img_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/account/18663867/watchlist/movies?api_key=560d2707c1f25f499312a978ad129c74&session_id=6b9736518fa6ee639d5b1261013c89cd8783d957",
    }).then(function (response) {
      console.log(response.data.results);
      setShowWatchlist(response.data.results);
    });
  }, []);

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
          {showWatchlist.map((watchlist) => {
            return (
              <div className="mb-5" data-aos="fade-up" data-aos-delay="150">
                <div className="card">
                  <a href={"/detail"}>
                    <div className="card-body d-flex">
                      <img
                        src={img_path + watchlist.poster_path}
                        alt="Thumbnail1"
                        width="273"
                        height="155"
                      />

                      <div className="ml-10-px col-6">
                        <h1 className="main-font text-dark ml-10-px">
                          {watchlist.title}
                        </h1>
                        <p className="main-font text-dark">
                          {watchlist.overview}
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
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Watchlist;
