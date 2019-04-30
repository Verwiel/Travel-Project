import React, {useState} from 'react';
//CSS
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default () => {
  const [stateTrip, setTrip] = useState({
    tripName: "",
    startDate: "",
    endDate: "",
    tripDesc: "",
  });
 
  //same as old handle changes, with exception of
  //spread operator since im using multiple values
  const updateField = e => {
    setTrip({
      ...stateTrip,
      [e.target.name]: e.target.value
    });
  };
  
  
  //handleSubmit, posts values to console
  const printValues = e => {
    e.preventDefault();
    console.log(stateTrip.tripName,
      stateTrip.startDate,
      stateTrip.endDate,
      stateTrip.tripDesc
      //might have to set values back to "" after
      );
  };

  return (
    <>
    <legend>Trip</legend>
    {/* <p> id: {trip.id}</p> */}
    <Form onSubmit={printValues}>
      <Form.Row>
        <Form.Group as={Col} controlId="tripName">
          <Form.Label>Name of Trip</Form.Label>
          <Form.Control type="text" 
            placeholder="Enter trip name"
            name="tripName" 
            value = {stateTrip.tripName}
            onChange= {updateField} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" 
            name="startDate" 
            value = {stateTrip.startDate} 
            onChange= {updateField} />
        </Form.Group>

        <Form.Group as={Col} controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" 
            name="endDate" 
            value = {stateTrip.endDate}
            onChange= {updateField} />
        </Form.Group>
      </Form.Row> 

      <Form.Row>
       <Form.Group as={Col} controlId="tripDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" 
            placeholder="Enter Description"
            name="tripDescription" 
            value = {stateTrip.tripDesc}
            onChange= {updateField} />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
      Submit
      </Button>
    </Form>
  </>

  );
}

//make submit button work
//post with api
//make pretty