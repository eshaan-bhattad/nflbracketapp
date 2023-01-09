/* eslint-disable no-console */
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { useParams } from 'react-router-dom';
import { Bracket } from 'react-brackets';
import Accordion from 'react-bootstrap/Accordion';

import getBracketFromID from '../common/utils';
import getPoints from '../perfectbracket';

function BracketPage() {
  const title = 'Bracket';
  // eslint-disable-next-line no-console
  const { id } = useParams();
  const bracket = getBracketFromID(id);
  console.log(getPoints(bracket));
  const rounds = [
    {
      title: 'Wild Card Weekend',
      seeds: [
        {
          id: 'wildCard1',
          date: new Date().toDateString(),
          teams: [{ name: '4th Seed' }, { name: '5th Seed' }],
        },
        {
          id: 'wildCard2',
          date: new Date().toDateString(),
          teams: [{ name: '3rd Seed' }, { name: '6th Seed' }],
        },
        {
          id: 'wildCard3',
          date: new Date().toDateString(),
          teams: [{ name: '2nd Seed' }, { name: '5th Seed' }],
        },
        {
          id: 'byeTeam',
          date: new Date().toDateString(),
          teams: [{ name: '1st Seed' }],
        },
      ],
    },
    {
      title: 'Divisional Round',
      seeds: [
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [{ name: '1st Seed' }, { name: 'TBD' }],
        },
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [{ name: 'TBD' }, { name: 'TBD' }],
        },
      ],
    },
    {
      title: 'Conference',
      seeds: [
        {
          id: 11,
          date: new Date().toDateString(),
          teams: [{ name: 'TBD' }, { name: 'TBD' }],
        },
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>{'Bracket'}</title>
      </Helmet>
      <div className="container">
        <div className="px-4 py-4 my-5=4 text-center">
          <h1 className="display-5 fw-bold">{bracket.name}'s Bracket </h1>
          <div className="d-flex justify-content-center"></div>
          <Container style={cardStyle}>
            <Row>
              <Col xs={12} md={8}>
                <Accordion defaultActiveKey="">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>AFC Bracket</Accordion.Header>
                    <Accordion.Body>
                      <Bracket rounds={rounds}></Bracket>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>NFC Bracket</Accordion.Header>
                    <Accordion.Body>
                      <Bracket rounds={rounds}></Bracket>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col>
                <Card>
                  <Card.Header>Insert Leaderboard Ranking</Card.Header>

                  <Card.Title>
                    <Button size="lg" style={cardStyle} variant="primary">
                      {getPoints(bracket)}
                    </Button>
                  </Card.Title>
                  <Card.Body>
                    <ListGroup as="ol">
                      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{bracket.afcChampions}</div>
                        </div>
                        <Button variant="outline-dark">14 </Button>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{bracket.nfcChampions}</div>
                        </div>
                        <Button variant="success">17</Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                  <Card.Body></Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

const cardStyle = { marginTop: '5%' };
export default BracketPage;
