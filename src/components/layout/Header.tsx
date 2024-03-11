"use client";
import ScrollLink from "../ScrollLink";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3">
      <ScrollLink
        className="text-primary_dark font-semibold text-2xl"
        href="#hero"
      >
        OGI Agency
      </ScrollLink>

      <nav className="flex gap-8  items-center text-primary_dark font-semibold">
        <ScrollLink href="#hero">Home</ScrollLink>
        <ScrollLink href="#about">About</ScrollLink>
        <ScrollLink href="#portfolio">Work</ScrollLink>
        <ScrollLink href="#contact" className="btn">
          Contact
        </ScrollLink>

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
    </header>
  );
};

export default Header;
