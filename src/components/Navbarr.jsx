import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbarr() {
  return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">Edunomics Cost Estimator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#what">About Us</Nav.Link>
            <Nav.Link href="/room-section">Get Estimate</Nav.Link>

            <NavDropdown disabled title="Dropdown" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/room-section">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <p inline>(+91)9999667144 <FontAwesomeIcon icon={faPhone} /> </p>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
