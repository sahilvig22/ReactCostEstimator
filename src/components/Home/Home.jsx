import React from 'react'
import Navbarr from '../Navbarr'
import Foterr from '../Foterr'

import './Home.css'
import './HomeMobile.css'
import './smoothScrolling.js'
import bg from '../../assets/bg.jpeg'
import bedroom from '../../assets/Bedroom.jpeg'
import bathroom from '../../assets/Bathroom.jpeg'

export default function Home() {
  return (
    <React.Fragment>
      <Navbarr />

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
          <h3><span>Our</span> Team</h3>
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
          <h1> <u>

            <span>Some</span> of Our Previous Work
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

      <Foterr />

    </React.Fragment>

  )
}
