import "../styles/style.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const AccountPage = () => {
  return (
    <div className="bg-white text-dark min-vh-100">
      <header className="bg-black px-4 py-2">
        <img
          src="/assets/img/netflix_logo.png"
          alt="logo"
          style={{ width: "100px" }}
        />
      </header>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="h2 mb-4">Account</h1>
            <hr className="border-secondary" />

            <Row className="mb-4">
              <Col xs={12} lg={4} className="text-secondary fw-bold small mb-2">
                MEMBERSHIP & BILLING
                <Button
                  variant="light"
                  className="d-block mt-3 shadow-sm border rounded-0 small px-4 py-2 text-uppercase fw-bold"
                >
                  Cancel Membership
                </Button>
              </Col>
              <Col xs={12} lg={8}>
                <div className="d-flex justify-content-between fw-bold small">
                  <span>student@strive.school</span>
                  <a href="#" className="text-info text-decoration-none">
                    Change account email
                  </a>
                </div>
                <div className="d-flex justify-content-between text-secondary small">
                  <span>Password: ********</span>
                  <a href="#" className="text-info text-decoration-none">
                    Change password
                  </a>
                </div>
                <div className="d-flex justify-content-between text-secondary small mb-3">
                  <span>Phone: 321 044 1279</span>
                  <a href="#" className="text-info text-decoration-none">
                    Change phone number
                  </a>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center small">
                  <div className="fw-bold">
                    <i className="bi bi-paypal me-2"></i> PayPal{" "}
                    <span className="fw-normal ms-2 text-secondary">
                      admin@strive.school
                    </span>
                  </div>
                  <div className="text-end">
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block"
                    >
                      Update payment info
                    </a>
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block"
                    >
                      Billing details
                    </a>
                  </div>
                </div>
                <hr />
                <div className="text-end small">
                  <a
                    href="#"
                    className="text-info text-decoration-none d-block"
                  >
                    Redeem gift card or promo code
                  </a>
                  <a
                    href="#"
                    className="text-info text-decoration-none d-block"
                  >
                    Where to buy gift cards
                  </a>
                </div>
              </Col>
            </Row>

            <hr className="border-secondary" />

            <Row className="mb-4">
              <Col xs={12} lg={4} className="text-secondary fw-bold small mb-2">
                PLAN DETAILS
              </Col>
              <Col xs={12} lg={8}>
                <div className="d-flex justify-content-between fw-bold small">
                  <div>
                    Premium{" "}
                    <span className="border border-dark px-1 ms-1 smaller">
                      ULTRA HD
                    </span>
                  </div>
                  <a href="#" className="text-info text-decoration-none">
                    Change plan
                  </a>
                </div>
              </Col>
            </Row>

            <hr className="border-secondary" />

            <Row className="mb-4">
              <Col xs={12} lg={4} className="text-secondary fw-bold small mb-2">
                SETTINGS
              </Col>
              <Col xs={12} lg={8} className="small">
                <a
                  href="#"
                  className="text-info text-decoration-none d-block mb-1"
                >
                  Parental controls
                </a>
                <a
                  href="#"
                  className="text-info text-decoration-none d-block mb-1"
                >
                  Test participation
                </a>
                <a
                  href="#"
                  className="text-info text-decoration-none d-block mb-1"
                >
                  Manage download devices
                </a>
                <a
                  href="#"
                  className="text-info text-decoration-none d-block mb-1"
                >
                  Activate a device
                </a>
                <a
                  href="#"
                  className="text-info text-decoration-none d-block mb-1"
                >
                  Recent device streaming activity
                </a>
                <a href="#" className="text-info text-decoration-none d-block">
                  Sign out of all devices
                </a>
              </Col>
            </Row>

            <hr className="border-secondary" />

            <Row>
              <Col xs={12} lg={4} className="text-secondary fw-bold small mb-2">
                MY PROFILE
              </Col>
              <Col xs={12} lg={8}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="fw-bold small d-flex align-items-center">
                    <img
                      src="/assets/img/avatar.png"
                      alt="avatar"
                      className="rounded-circle me-2"
                      style={{ width: "35px" }}
                    />
                    Strive Student
                  </div>
                  <div className="text-end small">
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block"
                    >
                      Manage profiles
                    </a>
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block"
                    >
                      Add profile email
                    </a>
                  </div>
                </div>
                <Row className="small">
                  <Col xs={6}>
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block mb-1"
                    >
                      Language
                    </a>
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block mb-1"
                    >
                      Playback settings
                    </a>
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block"
                    >
                      Subtitle appearance
                    </a>
                  </Col>
                  <Col xs={6}>
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block mb-1"
                    >
                      Viewing activity
                    </a>
                    <a
                      href="#"
                      className="text-info text-decoration-none d-block"
                    >
                      Ratings
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccountPage;
