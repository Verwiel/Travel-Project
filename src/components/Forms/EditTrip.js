import React from 'react';
//CSS
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default () => {
  return (
    <>
      <legend>Edit Trip</legend>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="tripName">
            <Form.Label>Name of Trip</Form.Label>
            <Form.Control type="text" 
              placeholder="Enter trip name"
              name="tripName" 
              value ="" 
              onChange="" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" 
              name="startDate" 
              value ="" 
              onChange="" />
          </Form.Group>

          <Form.Group as={Col} controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" 
              name="endDate" 
              value ="" 
              onChange="" />
          </Form.Group>
        </Form.Row> 

        <Form.Row>
         <Form.Group as={Col} controlId="tripDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" 
              placeholder="Enter Description"
              name="tripDescription" 
              value ="" 
              onChange="" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
        Submit
        </Button>
      </Form>
    </>
  );
}

//add state, should be able to pull from NewTrip
//make button work
//update functionality with api
//make pretty