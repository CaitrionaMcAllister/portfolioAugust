import { useState } from "react";
import { NavLink } from "react-router-dom";
// import PlasticVortex from "../pages/projects/plasticVortex";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button
        className="dropdown-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default NavLinks;

// const ProjectLinks = () => {
//   return (
//     <>
//       <nav>
//         <NavLink to="/PlasticVortex">Plastic Vortex</NavLink>
//         <NavLink to="/MarioMethod">Mario Method</NavLink>
//         <NavLink to="/ByteMe">ByteMe</NavLink>
//         <NavLink to="/HomeHeatMap">Home Heat Map</NavLink>
//         <NavLink to="/Chill">Chill</NavLink>
//         <NavLink to="/Experiments">Experiments</NavLink>
//       </nav>
//     </>
//   );
// };

// export { ProjectLinks };
