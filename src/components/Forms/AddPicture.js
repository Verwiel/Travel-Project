import React, {useState} from 'react';
//CSS
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default () => {
  const [statePic, setPic] = useState({
    picCaption: "",
    picTitle: "",
  });

  const updateField = e => {
    setPic({
      ...statePic,
      [e.target.name]: e.target.value
    });
  };
  
  const printValues = e => {
    e.preventDefault();
    console.log(statePic.picCaption,statePic.picTitle);
  };

  return (
    <>
    <legend>Add Picture</legend>
    <Form onSubmit={printValues}>

      <Button href="#">
      Add Photo
      </Button>

      {/* Title */}
      <Form.Row>
      <Form.Group as={Col} controlId="picTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" 
            name="picTitle" 
            value= {statePic.picTitle}
            onChange= {updateField} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="picCaption">
          <Form.Label>Caption</Form.Label>
          <Form.Control type="text" 
            name="picCaption" 
            value= {statePic.picCaption}
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
//upload a photo somehow
