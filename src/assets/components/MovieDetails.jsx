import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Alert,
  Spinner,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useParams } from "react-router";

const MoviesDetails = () => {
  const params = useParams();
  const movieId = params.movieId;

  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await fetch(
          `http://www.omdbapi.com/?apikey=b100d47f&i=${movieId}`,
        );
        const movieData = await movie.json();
        const comments = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWZiNTFhODY1ODQ3YjAwMTVjODE2YTYiLCJpYXQiOjE3NzgwNzgxMjAsImV4cCI6MTc3OTI4NzcyMH0.jBtQSiGv1W7A-BUSTyQMKIWnik7Q2GUaW0TWhQD9YTQ",
            },
          },
        );
        const commentsData = await comments.json();
        setMovie(movieData);
        setComments(commentsData);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        console.log("Errore", err);
      }
    };
    fetchData();
  }, [movieId]);

  if (loading)
    return (
      <Spinner animation="border" variant="danger" role="status">
        <span className="visually-hidden">Caricamento...</span>
      </Spinner>
    );

  if (error)
    return <Alert variant="danger">Errore nel caricamento dei film.</Alert>;

  return (
    <Container>
      <Row className="justify-content-center ">
        <Col xs={12} md={8}>
          {" "}
          <Card>
            <Card.Img src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
                {comments.length > 0 ? (
                  comments.map((c) => (
                    <div
                      key={c._id}
                      className="border-bottom border-secondary py-2"
                    >
                      <p className="mb-0">
                        Voto: <strong>{c.rate}/5</strong>
                      </p>
                      <p className="font-italic">"{c.comment}"</p>
                    </div>
                  ))
                ) : (
                  <p>Nessuna recensione disponibile per questo titolo.</p>
                )}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesDetails;
