import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const Services = () => {
    return (
        <>
        <Head>
        <>
  <meta charSet="utf-8" /> <meta />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eco Thrive Website</title>
  <link rel="stylesheet" href="public/css/style.css" />
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
</>
        </Head>
        <>
  <header>
    <nav aria-label="navigation" className="navbar">
      <a href="#">
        <img
          src="public/images/ECO-THRIVE-LOGO.png"
          alt="manage"
          width="129.375em"
          height="106.25em"
        />
      </a>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/index" className="nav-link">
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
      <img src="public/images/Lightbulb.jpg " alt="manage" width="100%" />
      <div className="image-text">
        <h1 className="fs-primary-heading .--fw-bold">WHAT WE DO?</h1>
        <h1 className="--fw-bold">WHO WE ARE.</h1>
      </div>
    </div>
  </section>
  <br />
  <br />
  <main>
    <section className="paddin-block-400 | container">
      <div className="container">
        <div className="even-columns">
          <div>
            <h2>WE ARE IN THE BUSINESS OF PROVIDING INNOVATIVE SOLUTIONS.</h2>
          </div>
          <div>
            <p>
              Our team of experts implements innovative strategies that enhance
              the overall well-being of the environment, the people, and fiscal
              standing of the parties involved.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="padding-block-900">
      <div className="container">
        <div className="even-columns">
          <div>
            <img src="public/images/datamanagement.jpg" alt="Manage" />
          </div>
          <div>
            <h2>DATA MANAGEMENT CONSULTATION</h2>
            <p>
              We are a social enterprise consisting of experts with backgrounds
              and rich experience in community development ,environmental
              science, business develpment, engineering and technology.
            </p>
          </div>
        </div>
        <div className="even-columns">
          <div>
            <h2>DATA MINING, ANALYSIS AND INTERPRETATION</h2>
            <p>
              We alalyze your existing data, and those from external sources
              when needed, and interpret the findings in accordance to your
              goal.We will help you understand where you are at in relation to
              where you would like to be, and how to get there, and innovate
              steps you can take to enhance your financial, social and
              environmental impact.
            </p>
          </div>
          <div>
            <img
              src="public/images/datamining.jpeg"
              alt="Manage"
              width="100%"
              height=""
            />
          </div>
        </div>
        <div className="even-columns">
          <div>
            <img src="public/images/projectstrategies.jpg" alt="Manage" />
          </div>
          <div>
            <h2>PROJECT STRATEGIES, CONSULTATION AND IMPLEMENTATION</h2>
            <p>
              We help you realize your goals by working with you to create
              scalable, sustainable implementation strategies that bear
              simultaneous impact on the social, economic and physical standing
              on the community.
            </p>
          </div>
        </div>
        <div className="even-columns">
          <div>
            <h2>SUSTAINABLE BUSINESS DEVELOPMENT</h2>
            <p>
              Using our wide networks, we help you establish sustainable
              sourcing and distribution networks that better the lives of the
              people involved, are environment friendly and are economically
              sound to you.
            </p>
          </div>
          <div>
            <img src="public/images/stackedcoins.jpg" alt="Manage" />
          </div>
        </div>
      </div>
    </section>
  </main>
  <section className="bg-primary-500">
    <div className="container | bg-neutral-100 |fa-align-center">
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
          <textarea
            name="text"
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
              src= "public/images/ECO-THRIVE-LOGO.png"
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
</>
<Script src="public/js/main.js "></Script>
<script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
<script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </>
        ); 
};

export default Services;
