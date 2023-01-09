import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import data from '../data';
import getPoints from '../perfectbracket';
import Leaderboard from '../components/Leaderboard';

function Home() {
  const title = 'NFL Bracket Challenge';

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
          <Container sm style={{ marginTop: '5%' }}>
            <Row>
              <Col>
                <h3>Top 10 Brackets</h3>
                <Container style={{ width: '65%' }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item as="li"></ListGroup.Item>
                    {data.slice(0, 10).map((item, i) => (
                      <a href={`/bracket/${item.id}`} style={{ textDecoration: 'none' }}>
                        <ListGroup.Item as="li" className="d-flex justify-content-right align-items-center">
                          <div className=" mx-auto justify-content-left ">
                            <div className="fw-bold justify-content-center">{item.name.trim()}</div>
                            <div className="justify-content-center">{item.superbowl.trim()}</div>
                          </div>
                          <div className="ms-auto mx-right">
                            <Button variant="primary">{getPoints(item).toString().concat('/48')}</Button>
                          </div>
                        </ListGroup.Item>
                      </a>
                    ))}
                  </ListGroup>
                </Container>{' '}
              </Col>
              <Col>
                <h3>Statistics</h3>
                <Carousel variant="dark" style={{ marginTop: '3%' }}>
                  <Carousel.Item>
                    <Card></Card>
                    <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=eee" alt="First slide" />
                    <Carousel.Caption>
                      <h5>Superbowl Pick</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second slide&bg=eee"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h5>NFC Champion Picks</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h5>AFC Champion Picks</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                {/*
                <Accordion defaultActiveKey="3">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Superbowl Picks</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Conference Picks</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Divisional Picks</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Wildcard Picks</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  );
}

export default Home;
