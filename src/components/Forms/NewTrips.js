import React from 'react';
//CSS
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default () => {
  // state ={
  //   username: "",
  //   password: ""
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name] : event.target.value
  //   }, console.log([event.target.name] , event.target.value))
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(this.state)
  //   this.setState({
  //     username: "",
  //     password: ""
  //   })
  // }

  return (
    <>
    <legend>New Trip</legend>
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

//add state
//make submit button work
//post with api
//make pretty