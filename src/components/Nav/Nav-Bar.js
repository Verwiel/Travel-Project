import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">UserName</Navbar.Brand>
      
      <DropdownButton
        alignRight
        title="Dropdown right"
        id="dropdown-menu-align-right">
        <Dropdown.Item href="/TripList">Select Trip</Dropdown.Item>
        <Dropdown.Item href="/NewTrip">Create Trip</Dropdown.Item>
      </DropdownButton>  
    </Navbar>

 </>
  );
}