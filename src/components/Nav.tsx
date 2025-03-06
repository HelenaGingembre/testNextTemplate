import React from "react";
import AppLink from "./AppLink";

const Nav = () => {
  return (
    <nav className="flex gap-8  items-center text-primary_dark font-semibold">
      <AppLink href="/" className="btn">
        Home
      </AppLink>
      <AppLink href="#about" className="btn">
        About
      </AppLink>
      <AppLink href="#portfolio" className="btn">
        Work
      </AppLink>
      <AppLink href="#contact" className="btn">
        Contact
      </AppLink>

      {/* <li className="dropdown">
          <div className="dropbtn">
            <a href="#">
              <img
                src="./img/uk_flag.png"
                alt="english"
                title="Click for english"
              />
            </a>
          </div>
          <div className="dropdown-content">
            <a href="index_fr.html">
              <img
                src="img/fr_flag.png"
                alt="french"
                title="Click for french"
              />
            </a>
            <a href="index_ru.html">
              <img
                src="img/ru_flag.png"
                alt="russian"
                title="Click for russian"
              />
            </a>
            <a href="index_ua.html">
              <img
                src="img/ua_flag.png"
                alt="ukrainian"
                title="Click for ukrainian"
              />
            </a>
          </div>
        </li>

        <div className="navbar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
    </nav>
  );
};

export default Nav;
