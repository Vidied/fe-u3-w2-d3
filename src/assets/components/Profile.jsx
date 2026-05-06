import "../styles/style.css";

const EditProfile = () => {
  return (
    <div className="bg-netflix min-vh-100 text-white p-4">
      <header className="mb-5">
        <div className="logo" style={{ width: "120px" }}>
          <img
            src="/assets/img/netflix_logo.png"
            alt="logo netflix"
            className="img-fluid"
          />
        </div>
      </header>

      <div className="container">
        <div className="row justify-content-center">
          <main className="col-12 col-md-8 col-lg-6 col-xl-5">
            <h1 className="display-4 fw-bold mb-0">Edit Profile</h1>
            <hr className="border-secondary mt-0 mb-4" />

            <div className="row">
              <div className="col-4 col-lg-3 mb-4 mb-lg-0">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded"
                    src="/assets/img/avatar.png"
                    alt="profile avatar"
                  />

                  <div className="position-absolute bottom-0 start-0 p-1">
                    <i className="bi bi-pencil-fill bg-dark rounded-circle p-1 small"></i>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-9">
                <input
                  type="text"
                  className="bg-grey text-white border-0 w-100 p-2 mb-4 fs-5"
                  defaultValue="Strive Student"
                />

                <h5 className="text-light-grey mb-2">Language:</h5>
                <div className="dropdown mb-4">
                  <button
                    className="btn btn-black dropdown-toggle text-white border border-secondary rounded-0 px-3"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    English
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <button className="dropdown-item">Italiano</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Spanish</button>
                    </li>
                    <li>
                      <button className="dropdown-item">French</button>
                    </li>
                  </ul>
                </div>

                <hr className="border-secondary my-4" />

                <h5 className="text-light-grey mb-2">Maturity Settings:</h5>
                <span className="bg-grey d-inline-block px-2 py-1 fw-bold small mb-3">
                  ALL MATURITY RATINGS
                </span>
                <p className="small mb-3">
                  Show titles of <strong>all maturity ratings</strong> for this
                  profile.
                </p>
                <button className="btn btn-outline-secondary rounded-0 px-4 mb-4">
                  EDIT
                </button>

                <hr className="border-secondary my-4" />

                <h5 className="text-light-grey mb-3">Autoplay controls:</h5>
                <div className="form-check d-flex align-items-center gap-3 p-0 mb-3">
                  <input
                    className="form-check-input bg-transparent border-secondary rounded-0 m-0"
                    type="checkbox"
                    defaultChecked
                  />
                  <label className="form-check-label small">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="form-check d-flex align-items-center gap-3 p-0 mb-3">
                  <input
                    className="form-check-input bg-transparent border-secondary rounded-0 m-0"
                    type="checkbox"
                    defaultChecked
                  />
                  <label className="form-check-label small">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </div>
            </div>

            <hr className="border-secondary my-4" />

            <footer className="d-flex flex-wrap gap-3 mt-4">
              <button className="btn btn-light rounded-0 px-4 fw-bold">
                SAVE
              </button>
              <button className="btn btn-outline-secondary rounded-0 px-4">
                CANCEL
              </button>
              <button className="btn btn-outline-secondary rounded-0 px-4">
                DELETE PROFILE
              </button>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
