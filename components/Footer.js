const Footer = () => {
    return (
        <>
        <footer className=" footer | padding-block-700 bg-neutral-900 text-neutral-100">
  <div className="container">
    <div className="even-columns">
      <div>
        <a href="#">
          <img
            src="assets/images/ECO-THRIVE-LOGO.png"
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
            <input type="email" name="email" placeholder="Email" required="" />
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
    )
}
 export default Footer
 