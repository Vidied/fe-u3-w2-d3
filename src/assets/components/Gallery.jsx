import { Component } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router";

class Gallery extends Component {
  state = {
    film: [],
    isLoading: true,
    showAll: false,
  };

  componentDidMount() {
    this.fetchFilm();
  }

  fetchFilm = async () => {
    const apiKey = "b100d47f";

    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.props.search}`,
      );

      if (res.ok) {
        const data = await res.json();
        if (data.Search) {
          this.setState({
            film: data.Search,
            isLoading: false,
          });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (err) {
      console.log("Errore nella fetch", err);
      this.setState({ isLoading: false, isError: true });
    }
  };
  render() {
    const filmsToShow = this.state.showAll
      ? this.state.film
      : this.state.film.slice(0, 6);

    return (
      <div className="px-5 my-3">
        <h4 className="text-white mb-3">
          {this.props.title}{" "}
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => this.setState({ showAll: !this.state.showAll })}
          >
            Show all
          </button>
        </h4>

        {this.state.isLoading && (
          <Spinner animation="border" variant="danger" role="status">
            <span className="visually-hidden">Caricamento...</span>
          </Spinner>
        )}

        {this.state.isError && (
          <Alert variant="danger">Errore nel caricamento dei film.</Alert>
        )}

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-2">
          {filmsToShow.map((card) => (
            <Col key={card.imdbID}>
              <Link to={"/MoviesDetails/" + card.imdbID}>
                <img
                  src={card.Poster}
                  alt={card.Title}
                  className="img-fluid rounded shadow"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    height: "350px",
                    width: "100%",
                  }}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Gallery;
