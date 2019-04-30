import React from 'react';
import Button from 'react-bootstrap/Button'

export default () => {
  return (
    <div>
      <h1>Trip List</h1>
      <p>trip ###

      <Button href="/NewTrip">
      Update
      </Button>
      <Button variant="primary" type="submit">
        Delete
      </Button>
      </p>
    </div>
  );
}

//list of trips (table?)
//delete buttons
//update buttons