"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="flex gap-8  items-center text-primary_dark font-semibold">
      <Link href="/" className="btn-green">
        Home
      </Link>
      <Link href="/projects" className="btn-green">
        My projects
      </Link>
      <Link href="/contacts" className="btn-green">
        Contact
      </Link>

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
