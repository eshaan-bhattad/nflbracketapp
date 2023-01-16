import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import data from "../data";
import { getPoints, getSuperbowlFavorites } from "../perfectbracket";
import Leaderboard from "../components/Leaderboard";

function Home() {
  const title = "NFL Bracket Challenge";

  data.sort((a, b) => (getPoints(a) >= getPoints(b) ? -1 : 1));
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-fluid">
        <div className="px-4 py-4 my-5=4 text-center">
          <h1 className="display-5 fw-bold">{title}</h1>
          <Container sm style={{ marginTop: "5%" }}>
            <Row>
              <Col>
                <h3>Top 10 Brackets</h3>
                <Container style={{ width: "100%" }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item as="li"></ListGroup.Item>
                    {data.slice(0, 10).map((item, i) => (
                      <a
                        href={`/bracket/${item.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-right align-items-center"
                        >
                          <div className="fw-bold justify-content-center">
                            {item.name.trim()}
                          </div>
                          <div className="ms-auto mx-right">
                            <Button variant="primary">{getPoints(item)}</Button>
                          </div>
                        </ListGroup.Item>
                      </a>
                    ))}
                  </ListGroup>
                </Container>{" "}
              </Col>
              <Col>
                <h3 style={{ marginBottom: "4%" }}>Insights</h3>

                <Row xs={1} md={1} className="g-4">
                  <Col>
                    <Card style={{ marginBottom: "5%" }}>
                      <Card.Body>
                        <Card.Title>Buffalo Bills</Card.Title>
                        <Card.Text>AFC Champion Favorites</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: "5%" }}>
                      <Card.Body>
                        <Card.Title>San Francisco 49ers</Card.Title>
                        <Card.Text>NFC Champion Favorites</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: "5%" }}>
                      <Card.Body>
                        <Card.Title>Buffalo Bills</Card.Title>
                        <Card.Text>Superbowl Favorites</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card style={{ marginBottom: "5%" }}>
                      <Card.Body>
                        <Card.Title>58</Card.Title>
                        <Card.Text>Most Common Tiebreaker Score</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  );
}

export default Home;
