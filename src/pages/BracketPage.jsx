/* eslint-disable no-console */
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { useParams } from "react-router-dom";
import { Bracket } from "react-brackets";
import Accordion from "react-bootstrap/Accordion";

import getBracketFromID from "../common/utils";
import {
  getPoints,
  getRemainingPossiblePoints,
  getSeedingForBracket,
} from "../perfectbracket";

function BracketPage() {
  const title = "Bracket";
  // eslint-disable-next-line no-console
  const { id } = useParams();
  const bracket = getBracketFromID(id);
  const nfcWildCards = getSeedingForBracket(bracket, "nfc");
  const afcWildCards = getSeedingForBracket(bracket, "afc");
  const afcBracket = [
    {
      title: "Wild Card Weekend",
      seeds: [
        {
          id: "wildCard1",
          date: new Date().toDateString(),
          teams: [
            { name: "Los Angeles Chargers" },
            { name: "Jacksonville Jaguars" },
          ],
        },
        {
          id: "wildCard2",
          date: new Date().toDateString(),
          teams: [{ name: "Baltimore Ravens" }, { name: "Cincinnati Bengals" }],
        },
        {
          id: "wildCard3",
          date: new Date().toDateString(),
          teams: [{ name: "Miami Dolphins" }, { name: "Buffalo Bills" }],
        },
      ],
    },
    {
      title: "Divisional Round",
      seeds: [
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [{ name: "Kansas City Chiefs" }, { name: afcWildCards[0] }],
        },
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [{ name: afcWildCards[1] }, { name: afcWildCards[2] }],
        },
      ],
    },
    {
      title: "Conference",
      seeds: [
        {
          id: 11,
          date: new Date().toDateString(),
          teams: [
            { name: bracket.afcDivisional1 },
            { name: bracket.afcDivisional2 },
          ],
        },
      ],
    },
  ];
  const nfcBracket = [
    {
      title: "Wild Card Weekend",
      seeds: [
        {
          id: "wildCard1",
          date: new Date().toDateString(),
          teams: [{ name: "Dallas Cowboys" }, { name: "Tampa Bay Buccaneers" }],
        },
        {
          id: "wildCard2",
          date: new Date().toDateString(),
          teams: [{ name: "New York Giants" }, { name: "Minnesota Vikings" }],
        },
        {
          id: "wildCard3",
          date: new Date().toDateString(),
          teams: [
            { name: "Seattle Seahawks" },
            { name: "San Francisco 49ers" },
          ],
        },
      ],
    },
    {
      title: "Divisional Round",
      seeds: [
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [
            { name: "Philadelphia Eagles" },
            {
              name: nfcWildCards[0],
            },
          ],
        },
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [{ name: nfcWildCards[1] }, { name: nfcWildCards[2] }],
        },
      ],
    },
    {
      title: "Conference",
      seeds: [
        {
          id: 11,
          date: new Date().toDateString(),
          teams: [
            { name: bracket.nfcDivisional1 },
            { name: bracket.nfcDivisional2 },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>{"Bracket"}</title>
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
                      <Bracket rounds={afcBracket}></Bracket>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>NFC Bracket</Accordion.Header>
                    <Accordion.Body>
                      <Bracket rounds={nfcBracket}></Bracket>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col>
                <Card>
                  <Card.Header>
                    {getPoints(bracket) +
                      " of " +
                      getRemainingPossiblePoints(bracket) +
                      " possible points"}
                  </Card.Header>

                  <Card.Title>
                    <Button size="lg" style={cardStyle} variant="primary">
                      {getPoints(bracket) + " Points"}
                    </Button>
                  </Card.Title>
                  <Card.Body>
                    <div className="mx-auto">
                      <h3 className="fw-bold">{"🏆" + bracket.superbowl}</h3>
                      <h5 className="fw-bold">{bracket.tiebreaker}</h5>
                    </div>
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

const cardStyle = { marginTop: "5%" };
export default BracketPage;
