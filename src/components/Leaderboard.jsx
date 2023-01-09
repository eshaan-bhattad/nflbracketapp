import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import data from '../data';
import getPoints from '../perfectbracket';
import getBracketFromID from '../common/utils';

function Leaderboard(props) {
  // eslint-disable-next-line no-console
  console.log(props);
  data.sort((a, b) => (getPoints(a) >= getPoints(b) ? -1 : 1));

  return (
    <>
      <Helmet>
        <title>{'Leaderboard'}</title>
      </Helmet>
      <div className="container">
        <div className="px-4 py-4 my-5=4 text-center">
          <Container style={{ width: '50%', justifyContent: 'center' }}>
            <ListGroup variant="flush">
              <ListGroup.Item as="li">
                <h3>Leaderboard</h3>
              </ListGroup.Item>
              {data.map((item, i) => (
                <a href={`/bracket/${item.id}`} style={{ textDecoration: 'none' }}>
                  <ListGroup.Item as="li">
                    <Row>
                      <Col>
                        <div className="mx-left justify-content-center align-items-center">
                          <h5 variant="warning">{i + 1}</h5>
                        </div>
                      </Col>
                      <Col>
                        <div className=" mx-auto justify-content-left ">
                          <div className="fw-bold justify-content-left">{item.name.trim()}</div>
                          <div className="justify-content-center">{item.superbowl.trim()}</div>
                        </div>
                      </Col>
                      <Col>
                        <div className="ms-auto mx-right ">
                          <Button style={{ marginRight: '5%' }} variant="primary">
                            {getPoints(item).toString().concat('/48')}
                          </Button>
                          <Button variant="outline-dark">{item.tiebreaker}</Button>
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </a>
              ))}
            </ListGroup>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
