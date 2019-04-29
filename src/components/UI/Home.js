import React from 'react';
import NavBar from '../Nav/Nav-Bar'
//CSS
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//Components
import ImageContainer from './Images';
import Map from './Map';
import TripPanel from './TripPanel';

const homeStyle = {
  height: '100%',
  backgroundColor: 'blue'
};

export default () => {
  return (
    <div style={homeStyle}>
      <Container fluid>
        <Row noGutters>
          <Col xs={12}>
            <NavBar />
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={8}>
            <Map />
            <ImageContainer />
          </Col>
          <Col xs={4}>
            <TripPanel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}