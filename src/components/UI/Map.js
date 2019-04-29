import React from 'react';


const divStyle = {
  backgroundColor: 'yellow',
};

const mapStyle = {
  width: '100%',
  height: '15em',

};

export default () => {
  return (
    <div style={divStyle}>
      <h1>Map</h1>
      <img 
        style={mapStyle}
        src='https://geology.com/world/the-united-states-of-america-map.gif' />
    </div>
  );
}

//find a way to have user be able to track route
//depends on day and location
//should also be expandable
//maybe link off google maps somehow