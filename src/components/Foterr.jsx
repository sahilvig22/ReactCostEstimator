import React from 'react'

export default function Foterr() {
  return (
    <div>
      <footer class="footer py-2 mt-2 ">
        <div class="footer-container container">
          <div class="news-grid">
            {/* <img src="img/logo_light.png" alt="logo" class="logo" />  */}
            <p>
              Feel free to contact us <i class="fas fa-phone-volume"></i>
            </p>
          </div>
          <div class="email">
            <h3> EMAIL NEWSLETTER </h3>
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
    </div>
  )
}
