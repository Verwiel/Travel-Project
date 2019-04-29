import React from 'react';
//CSS
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default () => {

  return (
    <>
    <legend>New Day</legend>
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="dayDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" 
            name="dayDate" 
            value ="" 
            onChange="" />
        </Form.Group>
      </Form.Row> 

      <Form.Row>
        <Form.Group as={Col} controlId="dayCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="dayState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
          </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="daySummary">
          <Form.Label>Summary</Form.Label>
          <Form.Control type="text" 
            name="daySummary" 
            value ="" 
            onChange="" />
        </Form.Group>
      </Form.Row>

      <Button href="/AddPicture">
      Add Photo
      </Button>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </>

  );
}

//display day # at top
//input fields for the following:
  //date, location, description/summary
//add picture button that links to AddPicture
//Submit button