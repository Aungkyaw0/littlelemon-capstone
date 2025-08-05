import { NavLink } from 'react-router';
import logo from '../assets/images/logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-column">
          <h2 className="footer-title">
<NavLink to={"/home"}>
          <img src={logo} alt="Logo " />
        </NavLink>          </h2>
          <p className="footer-description">
            A family-owned Mediterranean restaurant in Chicago. Taste the tradition with a modern twist.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reserve">Reserve</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>123 Mediterranean Way</li>
            <li>Chicago, IL</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X (Twitter)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
