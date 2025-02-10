import Nav from "./Nav";

import AppLink from "./AppLink";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-3">
      <AppLink className="text-primary_dark font-semibold text-2xl" href="/">
        OGI Agency
      </AppLink>
      <Nav />
    </header>
  );
};

export default Header;
