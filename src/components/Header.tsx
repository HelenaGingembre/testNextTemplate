import Link from "next/link";
import Nav from "./nav";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-3">
      <Link className="text-primary_dark font-semibold text-2xl" href="/">
        OGI Agency
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
