import Link from 'next/link';

const Header = () => {
  return (
    <>
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
        <a href="Index.html" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="About Us.html" className="nav-link">
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a href="Projects.html" className="nav-link">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a href="Services.html" className="nav-link">
          Services
        </a>
      </li>
      <li className="nav-item">
        <a href="Blog.html" className="nav-link">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a href="Contact Us.html" className="nav-link">
          Contact Us
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

   </>
  )
}

export default Navbar