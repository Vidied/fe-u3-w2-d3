import "../styles/style.css";

const MainHome = () => {
  return (
    <main className="px-5 pt-5">
      <section className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <h1 className="text-white me-4">TV Shows</h1>
          <div className="dropdown">
            <button
              className="btn bg-black dropdown-toggle text-white border border-1 border-white rounded-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="me-3">Genres</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center ms-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list-columns-reverse text-white border border-1 border-white icone"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5m4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5m-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-grid-fill text-white border border-1 border-white icone"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
          </svg>
        </div>
      </section>

      <section>
        <article className="row g-1 my-4">
          <h5 className="text-white">Trending Now</h5>
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media0.webp"
            alt="Media 0"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media1.jpg"
            alt="Media 1"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media2.webp"
            alt="Media 2"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media3.webp"
            alt="Media 3"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media4.jpg"
            alt="Media 4"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media5.webp"
            alt="Media 5"
          />
        </article>

        <article className="row g-1 my-4">
          <h5 className="text-white">Watch it Again</h5>
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media6.jpg"
            alt="Media 6"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media7.webp"
            alt="Media 7"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media8.webp"
            alt="Media 8"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media9.jpg"
            alt="Media 9"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media10.jpg"
            alt="Media 10"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media11.jpg"
            alt="Media 11"
          />
        </article>

        <article className="row g-1 my-4">
          <h5 className="text-white">New Releases</h5>
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media12.jpg"
            alt="Media 12"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media13.jpg"
            alt="Media 13"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media14.webp"
            alt="Media 14"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media15.jpg"
            alt="Media 15"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media16.webp"
            alt="Media 16"
          />
          <img
            className="col-6 col-md-4 col-lg-2 img-fluid"
            src="./assets/media/media17.jpg"
            alt="Media 17"
          />
        </article>
      </section>
    </main>
  );
};

export default MainHome;
