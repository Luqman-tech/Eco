import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const About = () => {
    return (
        <>
        <Head>
    
  <meta charSet="utf-8" /> <meta />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eco Thrive Website</title>
  <link rel="stylesheet" href="ecothrivesite/public/css/style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />


        </Head>
  <header>
    <nav aria-label="navigation" className="navbar">
      <a href="#">
        <img
          src="ecothrivesite/public/images/ECO-THRIVE-LOGO.png"
          alt="manage"
          width="129.375em"
          height="106.25em"
        />
      </a>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="index.js" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about-us" className="nav-link">
            About 
          </a>
        </li>
        <li className="nav-item">
          <a href="/projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/blog" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact-us" className="nav-link">
            Contact 
          </a>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  </header>
  <section className="padding-block-500 | container">
    <div className="image-container">
      <img
        src="ecothrivesite/public/images/hands.jpg"
        alt="Manage"
        width="100%"
      />
      <div className="image-text">
        <h1 className="fs-primary-heading .--fw-bold">ABOUT US</h1>
        <h6>Changing Africa using the power of innovatiion and technology</h6>
      </div>
    </div>
  </section>
  <main>
    <section className="padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div className="container">
            <h2>OUR STORY</h2>
            <h2>
              OUR GOAL: HAVE COMMUNITIES UPLIFT THEMSELVESUSING THE POWER OF
              INNOVATION AND TECHNOLOGY.
            </h2>
            <p>
              ECO THRIVE AFRICA is a social enterprise consisting of experts
              with backgrounds and rich experience in community development,
              environmental sciences, business development, engieering and
              technology. We leverage data-driven technology, business,
              environmental expertise to implement innovative project strategies
              that enhance overall well-being of the environment, the people,
              and the fiscal standing of the parties involved, al at once.
            </p>
          </div>
          <img src="ecothrivesite/public/images/planetcity.jpg" alt="Manage" />
        </div>
      </div>
    </section>
    <section className="padding-block-400 | container"></section>
    <div className="container">
      <div className="even-columns">
        <h2>OUR VISION</h2>
        <p>
          To achieve a continent with thriving ecosystems; where development
          leverages innovation that is geared towards enhancing the quality of
          life of the African people, their environment and, their economic
          standing.
        </p>
        <h2>OUR MISSION</h2>
        <p>
          To build and amplify solutions and project strategies that efficiently
          function to ensure simultaneous benefit to the environment, the
          innovative and fiscal stand-point of the business involved and the
          people.
        </p>
      </div>
    </div>
  </main>
  <section className="padding-block-400 | container"></section>
  <br />
  <br />
  <section className="bg-primary-500 ">
    <div className="container | bg-neutral-100 |fa-align-center  padding-block-700">
      <div className="form | padding-block-700">
        <form>
          <h2 className="fs-secondary-heading">Get in Touch</h2>
          <label htmlFor="fname">Name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Name"
            required=""
          />
          <button type="submit">Save</button>
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <button type="submit">Save</button>
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name=""
            placeholder="Message"
            row={8}
            cols={40}
            required=""
            defaultValue={""}
          />
          <br />
          <div className="button">
            <button type="button" className="bg-primary-500 | text-accent-400">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <footer className=" footer | padding-block-700 bg-neutral-900 text-neutral-100">
    <div className="container">
      <div className="even-columns">
        <div>
          <a href="#">
            <img
              src="ecothrivesite/public/images/ECO-THRIVE-LOGO.png"
              alt="manage"
              width="129.375em"
              height="106.25em"
            />
          </a>
        </div>
        <div className="footer-nav">
          <ul className="ul">
            <li>
              <a href="Index.html">Home</a>
            </li>
            <li>
              <a href="About Us.html">About</a>
            </li>
            <li>
              <a href="Projects.html">Projects</a>
            </li>
            <li>
              <a href="Services.html">Services</a>
            </li>
            <li>
              <a href="Blog.html">Blog</a>
            </li>
            <li>
              <a href="Contact Us.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <nav aria-label="primary-navigation flex | bg-accent-400">
          <div className="">
            <div className="email">
              <i className="fa-solid fa-envelope" />
              <span>ecothriveafrica@gmail.com</span>
            </div>
            <div className="phone">
              <i className="fa-solid fa-phone" />
              <span>+254 795893 257</span>
            </div>
          </div>
          <div className="">
            <div className="twitter">
              <i className="fa-brands fa-square-x-twitter" />
              <span>Twitter</span>
            </div>
            <div className="facebook">
              <i className="fa-brands fa-square-facebook" />
              <span>Facebook</span>
            </div>
          </div>
        </nav>
        <div>
          <section className="">
            <h2>Subscribe to our newsletter</h2>
            <form method="get">
              <label htmlFor="email">Enter your email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <div className="button">
                <button
                  type="submit"
                  className="bg-primary-500 | text-accent-400"
                >
                  Go
                </button>
              </div>
            </form>
          </section>
          <br />
          <br />
          <br />
          <p>Copyright 2024. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>

  <Script src="ecothrivesite/public/js/main.js "></Script>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
<script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</>
    );
};

export default About
