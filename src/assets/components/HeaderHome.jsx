import "../styles/style.css";
import { Link } from "react-router";

const HeaderHome = () => {
  return (
    <header className="px-5 sfumatura">
      <nav className="bg-transparent navbar navbar-expand-lg p-0 w-100">
        <div className="container-fluid p-0">
          <Link className="navbar-brand logo nav-link" to="/">
            <img src="./assets/img/netflix_logo.png" alt="logo netflix" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex align-items-center">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white small-forzato active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white small-forzato"
                      to="/TVShows"
                    >
                      TV Shows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white small-forzato" to="#">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white small-forzato" to="#">
                      Recently Added
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white small-forzato" to="#">
                      My List
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="d-flex align-items-center">
                  <form className="d-flex align-items-center" role="search">
                    <input
                      className="form-control bg-transparent border-0 text-white p-0"
                      type="search"
                      placeholder="Search"
                      style={{ width: 0, transition: "0.3s", opacity: 0 }}
                    />
                    <button className="btn text-white p-2" type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                      </svg>
                    </button>
                  </form>

                  <ul className="navbar-nav flex-row align-items-center">
                    <li className="nav-item px-2">
                      <a className="nav-link text-white small-forzato" href="#">
                        KIDS
                      </a>
                    </li>
                    <li className="nav-item px-2">
                      <a className="nav-link text-white" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-bell-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                        </svg>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link text-white dropdown-toggle p-0"
                        href="./pagine_extra/profilo.html"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="./assets/img/avatar.png"
                          alt="User"
                          style={{ width: "32px", borderRadius: "4px" }}
                        />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end bg-black text-white">
                        <li>
                          <a
                            className="dropdown-item text-white"
                            href="./pagine_extra/settings.html"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-white"
                            href="./pagine_extra/profilo.html"
                          >
                            Profile
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderHome;
