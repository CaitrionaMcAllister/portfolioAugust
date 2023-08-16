import NavLinks from "./NavLinks";
import logo from "../images/cmcaLogo.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="Caitriona McAllister' Logo"
        href="/about"
      />
      <NavLinks />
    </header>
  );
};

export default Header;
