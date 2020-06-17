import React from 'react'
import './Home.css'
import './HomeMobile.css'
import './smoothScrolling.js'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import bg from '../../assets/bg.jpeg'
import bedroom from '../../assets/Bedroom.jpeg'
import bathroom from '../../assets/Bathroom.jpeg'

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

      {/* <img src={bg} alt="" className="rounded" /> */}

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


      <section id="about" class="mt-3">
        <center>
          <h1><u>

            Some of Our Previous Work
        </u>
          </h1>
        </center>
      </section>

      <section id="projects">
        {/* <!-- atleast one such class --> */}
        <div class="project-title">
          <div class="profile-link">

          </div>
        </div>
      </section>
      <section id="projects" class="py-2">

        <div class="container">
          {/* <!-- <h2>Editor Picks</h2> --> */}
          <div class="articles-container">

            <article class="card">
              <img src={bg} alt="NOO" />
              <div>
                <div class="category category-ent">Living Room</div>
                <h3>
                  <p class="project-title project-link">Khanna's Residence</p>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque similique voluptatem doloremque accusamus ut ipsa eaque tempore? Nihil error blanditiis aperiam expedita vero totam magnam, quidem inventore! Deleniti, nam officia!
               </p>
              </div>
            </article>


            <article class="card">
              <img src={bg} alt="NOO" />
              <div>
                <div class="category category-sports mt-2">Entire House</div>
                <h3>
                  <p class="project-title project-link">Sharma's Residence</p>
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sequi impedit eveniet. Fugit laudantium ducimus adipisci est nostrum at, veritatis eveniet alias illum sint iste?
               </p>
              </div>
            </article>



            <article class="card">
              <img src={bathroom} alt="NOO" />
              <div>
                <div class="category category-ent mt-2 ">Bathroom & Kitchen</div>
                <h3>
                  <p class="project-title project-link">Vig's Residence</p>
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum deleniti voluptatibus excepturi deserunt quas hic, sapiente nobis quisquam beatae possimus sint nemo atque quis incidunt?
               </p>
              </div>
            </article>



            <article class="card">
              <img src={bedroom} alt="NOO" />
              <div>
                <div class="category category-sports mt-2 ">Bedroom</div>
                <h3>
                  <p class="project-title project-link">Pathan's Villa</p>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus aperiam. Quidem accusamus, consequuntur necessitatibus sequi alias cum harum quis distinctio sapiente cumque dolores, deleniti aliquid maiores praesentium, ipsum nam!
               </p>
              </div>
            </article>


            <article class="card">
              <img src={bg} alt="NOO" />
              <div>
                <div class="category category-ent mt-2 ">Full House</div>
                <h3>
                  <p class="project-title project-link">Trilok's Apartment</p>
                </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iure sit repellendus omnis nihil voluptas numquam similique sint, ipsum neque.
               </p>
              </div>
            </article>

            <article class="card">
              <img src={bg} alt="NOO" />
              <div>
                <div class="category category-sports mt-2 ">Full House</div>
                <h3>
                  <p class="project-title project-link">Ram's Villa</p>
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis sunt ratione, voluptate cupiditate nulla sed qui vel ab corrupti?
               </p>
              </div>
            </article>

            <article class="card">
              <div>
                <div class="category category-ent">Keypoints or Strengths</div>

                <h3>
                  Communicational Skills, Time Management, Managerial Skills, Adaptable, Good Leaders,
                  Systematic Worker
        </h3>
              </div>
              <img src={bg} alt="" />
            </article>

          </div>
        </div>
      </section>

      <footer class="footer py-2 mt-2 ">
        <div class="footer-container container">
          <div class="news-grid">
            {/* <img src="img/logo_light.png" alt="logo" class="logo" />  */}
            <p>
              Feel free to contact us <i class="fas fa-phone-volume"></i>
            </p>
          </div>
          <div class="email">
            <h3>EMAIL NEWSLETTER</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              aspernatur.
        </p>
            <form>
              <input type="email" class="footer-email" placeholder="Enter Email..." />
              <input type="submit" value="Subscribe" class="btn btn-primary" />
            </form>
          </div>

          <div class="footer-site-links" id="contact">
            <h3>SITE LINKS</h3>
            <ul className="text-white">
              <li> <a href="https://github.com/sahilvig22" target="_blank">Github <i class="fab fa-github"></i></a> </li>
              <li> <a href="https://in.linkedin.com/in/sahilvig" target="_blank">Linkedin <i
                class="fab fa-linkedin-in"></i></a> </li>
              <li> <a href="mailto:thesahilvig@gmail.com?Subject=Hello%20Sahil" target="_top">Email <i
                class="fas fa-envelope"></i> </a> </li>
              {/* <li> <a href="github.com" target="_blank">Github</a> </li>  */}


              <li>Privacy Policy</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div class="footer-join-our-club">
            <h3>JOIN OUR CLUB</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              minima!
        </p>
            <a href="#" class="btn btn-secondary">Join Now</a>
          </div>

          <div class="footer-text">
            <p>Copyright © 2020, All Rights Reserved</p>
          </div>
        </div>
      </footer>

    </React.Fragment>

  )
}
