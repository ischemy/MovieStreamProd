function Footer() {
  return (
    <div data-aos="fade-up">
      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-4 container text-white-50 bg-transparent"
      >
        <hr className="solid" />
        <div className="row">
          <div className="col-12">
            <div className="col-6">
              <div
                className="modal fade"
                id="CuModal"
                aria-hidden="true"
                aria-labelledby="CuModalLabel"
                tabindex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-dark" id="CuModalLabel">
                        Contact Us
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label for="CuName" className="form-label text-dark">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="CuName"
                          />
                        </div>
                        <div className="mb-3">
                          <label for="CuEmail" className="form-label text-dark">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="CuEmail"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <label for="feedbackarea" className="text-dark">
                          Feedback
                        </label>
                        <br />
                        <textarea
                          name="feedbackarea"
                          id="feedbackarea"
                          cols="48"
                          rows="10"
                        ></textarea>
                        <br />
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="btn btn-primary"
                data-bs-toggle="modal"
                href="#CuModal"
                role="button"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <small>Copyright &copy; MovieStream</small>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
