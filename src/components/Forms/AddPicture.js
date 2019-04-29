import React from 'react';
//CSS
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default () => {

  return (
    <>
    <legend>Add Picture</legend>
    <Form>

      <Button href="#">
      Add Photo
      </Button>

      {/* Title */}
      <Form.Row>
        <Form.Group as={Col} controlId="picCaption">
          <Form.Label>Caption</Form.Label>
          <Form.Control type="text" 
            name="picCaption" 
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
//upload a photo somehow
//add caption to photo
//submit