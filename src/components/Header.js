import NavLinks from "./NavLinks";
import logo from "../images/cmcaLogo2.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Caitriona McAllister' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
