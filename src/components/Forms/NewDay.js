import React, {useState} from 'react';
//CSS
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default () => {
  const [stateDay, setDay] = useState({
    dayDate: "",
    dayCity: "",
    dayState: "",
    daySummary: ""
  });

  const updateField = e => {
    setDay({
      ...stateDay,
      [e.target.name]: e.target.value
    });
  };
  
  const printValues = e => {
    e.preventDefault();
    console.log(stateDay.dayDate,
      stateDay.dayCity,
      stateDay.dayState,
      stateDay.daySummary
      );
  };

  return (
    <>
    <legend>Day</legend>
    {/* <p> id: {day.id}</p> */}
    <Form onSubmit={printValues}>
      <Form.Row>
        <Form.Group as={Col} controlId="dayDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" 
            name="dayDate" 
            value = {stateDay.dayDate} 
            onChange= {updateField} />
        </Form.Group>
      </Form.Row> 

      <Form.Row>
        <Form.Group as={Col} controlId="dayCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text"
            name="dayCity"
            value= {stateDay.dayCity}
            onChange= {updateField}/>
        </Form.Group>

        <Form.Group as={Col} controlId="dayState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text"
            name="dayState"
            value= {stateDay.dayState}
            onChange= {updateField} />
          </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="daySummary">
          <Form.Label>Summary</Form.Label>
          <Form.Control type="text" 
            name="daySummary" 
            value= {stateDay.daySummary} 
            onChange= {updateField} />
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

//Submit button. sends to DB
//submit should also add to the array on TripPanel