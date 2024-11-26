import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./NavbarMobile";
import DesktopNavbar from "./NavbarDesktop";

const Navbar = () => {
  // Define breakpoints
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return <header>{isDesktop ? <DesktopNavbar /> : <MobileNavbar />}</header>;
};

export default Navbar;
