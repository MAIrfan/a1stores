import React from "react";
import styled from "styled-components";
import theme from "../styles/themes";

const NavbarWrapper = styled.nav`
  background-color: ${theme.primaryColor};
  color: ${theme.primaryButtonFontColor};
  padding: 1rem 4rem;
  font-size: 1.4rem;
`;

const Navbar = () => {
  return <NavbarWrapper>A1Stores</NavbarWrapper>;
};

export default Navbar;
