import React from 'react';
import Button from 'react-bootstrap/Button'

const divStyle = {
  backgroundColor: 'grey',
  height: '100%'
};

export default () => {

  return (
    <div style={divStyle}>
      <h1>List of Days</h1>
      <p>Day X 
      <Button href="/EditDay">
      Edit
      </Button></p>

      <Button href="/NewDay">
      Add Day
      </Button>

      <Button variant="primary"
        type="submit">
      End Trip
      </Button>
  </div>

  );
}

//list of days with location appear on right
//at top - all feature so user can see all pics
//can click day to filter the pictures
//will be a add new button that brings to NewDay
//Edit Day button, links to EditDay
//Finish button (removes add add edit button from trip)