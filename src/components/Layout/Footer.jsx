import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import menuItems from "./menuItems.js";
import "./Footer.scss";

import logoWhiteImage from "./assets/logo-white.png";

export const Footer = () => {

  const contacts = [
    { icon: faLocationDot, info: "78 Green St, Chicago, IL 60607" },
    { icon: faPhone, info: "(312) 555-3626" },
    { icon: faEnvelope, info: "customer@littlelemon.com" },
  ];
  
  const socials = [
    { icon: faFacebook, name: "Facebook", url: 'https://facebook.com' },
    { icon: faXTwitter, name: "X", url:'https://x.com' },
    { icon: faInstagram, name: "Instagram", url:'https://instagram.com' },
    { icon: faYoutube, name: "Youtube", url: 'https://youtube.com' },
  ];
  
  return (
    <footer className="footer">
      <div className="container grid">
        <img
          className="footer-logo"
          src={logoWhiteImage}
          alt="Little Lemon"
        />
        <nav className="footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              title={social.name}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
