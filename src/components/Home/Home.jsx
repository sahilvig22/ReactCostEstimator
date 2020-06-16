import React from 'react'
import './Home.css'
import './HomeMobile.css'
import './smoothScrolling.js'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import logo from '../../assets/background.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// <link
//   rel="stylesheet"
//   media="screen and (max-width: 768px)"
//   href="./HomeMobile.css"
// />

export default function Home() {
  return (
    <React.Fragment>
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
          <h2 class="m-heading text-center mt-3">
            <span className="">What</span> We Do
        </h2>
          <div class="items">

            <div class="item">
              <i class="fas fa-bath fa-2x"></i>

              <div>
                <h3>Bathroom Design </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, molestias?
              </p>
              </div>
            </div>

            <div class="item">
              {/* <i class="fas fa-book-reader fa-2x"></i> */}
              <i class="fas fa-couch fa-2x"></i>

              <div>
                <h3>Living Room Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, molestias?
              </p>
              </div>
            </div>

            <div class="item">
              {/* <i class="fas fa-pencil-alt fa-2x"></i> */}
              <i class="fas fa-bed fa-2x"></i>
              <div>
                <h3>Bed Room Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, molestias?
              </p>
              </div>


            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Who We Are  --> */}
      <section id="who">
        <div class="who-img"></div>
        <div class="who-text bg-dark px-4 text-white">
          <h2 class="m-heading pt-3"><span class="">Who</span> We Are</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            officiis saepe illum eligendi placeat minima dolorem, quo quis neque
            pariatur cumque quae recusandae soluta atque provident deserunt quod
            numquam quasi!
        </p>
          <h3>Our Team</h3>
          <ul class="list ">
            <li>Sahil</li>
            <li>Sayan</li>
            <li>Rahul</li>
            <li>Sam</li>
            <li>Sahil</li>
          </ul>
        </div>
      </section>





    </React.Fragment>

  )
}
