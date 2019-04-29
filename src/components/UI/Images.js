import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const divStyle = {
  backgroundColor: 'green',
};

const caroitemStyle ={
  height: '20em',
  width: '100%'
}

const caroimgStyle = {
  width: '100%',
  height: '30em',
  objectFit: 'cover',
  overflow: 'hidden',
  position: 'absolute',
  top: '0',
  left: '0',
};


export default () => {
  return (
    <div style={divStyle}>
    <h1>Images</h1>
    <Carousel>
      <Carousel.Item style={caroitemStyle}>
        <img
          style={caroimgStyle}        
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/250px-Bachalpsee_reflection.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={caroitemStyle}>
        <img
          style={caroimgStyle}
          src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={caroitemStyle}>
        <img
          style={caroimgStyle}
          src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

//user uploaded images appear here
//depends on day/all selected in TripDetail
//expandable and click through
//click the image to show a pop pop up description
