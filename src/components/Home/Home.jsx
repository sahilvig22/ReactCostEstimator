import React from 'react'
import './Home.css'
import './smoothScrolling.js'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/background.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Home() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">Edunomics Cost Estimator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#what">Design Gallery</Nav.Link>
            <Nav.Link href="/room-section">Get Estimate</Nav.Link>

            <NavDropdown disabled title="Dropdown" id="basic-nav-dropdown">
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
          <p inline>(+91)9845269898 <FontAwesomeIcon icon={faPhone} /> </p>
        </Navbar.Collapse>
      </Navbar>

      {/* <img src={logo} alt="" className="rounded" /> */}

      {/* Header Showcase */}
      <header id="showcase">
        <div class="showcase-content">
          <h1 class="l-heading">
            The Sky Is The Limit
        </h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            distinctio dolorem pariatur autem quibusdam ipsa?
        </p>
          <a href="#what" class="btn">Read More</a>
        </div>
      </header>

      {/* <!-- Section: What we do --> */}
      <section id="what" class="bg-light py-1">
        <div class="container">
          <h2 class="m-heading text-center">
            <span class="text-primary">What</span> We Do
        </h2>
          <div class="items">

            <div class="item">
              <i class="fas fa-university fa-2x"></i>
              <div>
                <h3>Investment Banking</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, molestias?
              </p>
              </div>
            </div>

            <div class="item">
              <i class="fas fa-book-reader fa-2x"></i>
              <div>
                <h3>Portfolio Management</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, molestias?
              </p>
              </div>
            </div>

            <div class="item">
              <i class="fas fa-pencil-alt fa-2x"></i>
              <div>
                <h3>Tax & Custodial</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, molestias?
              </p>
              </div>


            </div>
          </div>
        </div>
      </section>


    </React.Fragment>

  )
}
