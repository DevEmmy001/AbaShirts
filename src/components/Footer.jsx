import React from "react";
import { useMediaQuery } from "react-responsive";
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";
const FooterWrapper = () => {
  // Define breakpoints
  const isDesktop = useMediaQuery({ minWidth: 768 });
  // Breakpoints query
  return <footer>{isDesktop ? <FooterDesktop /> : <FooterMobile />}</footer>;
};

export default FooterWrapper;
