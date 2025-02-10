import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer>
        <div className="social-row">
          <SocialIcon
            target="_blank"
            url="www.facebook.com"
            href="https://www.facebook.com/lammitta"
            className="footer-icon"
          />
          <SocialIcon
            target="_blank"
            url="www.google.com"
            href="https://plus.google.com/u/0/111211904044310768070"
            className="footer-icon"
          />
          <SocialIcon
            target="_blank"
            url="www.linkedin.com"
            href="https://www.linkedin.com/in/helen-izotova-548929124/"
            className="footer-icon"
          />
          <SocialIcon
            target="_blank"
            url="www.github.com"
            href="https://github.com/HelenaGingembre/"
            className="footer-icon"
          />
        </div>
        <div className="footer-contact-container">
          <div>
            <p>
              © {year}
              <a href="/"> OGI</a>
            </p>
          </div>
          <div>
            <p>Ukraine &amp; Kyiv</p>
            <p>Luxembourg &amp; Luxembourg</p>
          </div>
          <div></div>
          <div>
            <a href="mailto:e.izotovagingembre@outlook.com">
              e.izotovagingembre@outlook.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
