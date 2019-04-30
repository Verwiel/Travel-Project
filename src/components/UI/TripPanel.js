import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
// import NewDay from '../Forms/NewDay'

const divStyle = {
  backgroundColor: 'grey',
  height: '100%'
};

export default () => {
  const [stateTripList, setTripList] = useState([]);

  const addItem = () => {
    setTripList([
      ...stateTripList,
      {
        id: stateTripList.length,
        value: "trip day   "
      }
    ]);
  };

  return (
    <div style={divStyle}>
      <h1>List of Days</h1>
      <hr />
      <button onClick={addItem}>Add a trip</button>
      <ul>
        {stateTripList.map(stateTripList => (
          <li key={stateTripList.id}>
          {stateTripList.value}
          <Button href="/NewDay">Edit</Button>
          </li>
        ))}
      </ul>
      {/* try and use logic to pull from submitted days */}

      <Button href="/NewDay">
      Add Day
      </Button>
  </div>

  );
}

//list of days with location appear on right
//at top - all feature so user can see all pics
//can click day to filter the pictures
//will be a add new button that brings to NewDay
//Edit Day button, links to EditDay