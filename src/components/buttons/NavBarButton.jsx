import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import fonts from '../../utils/fonts'
function NavBarButton({ data }) {
  return (
    <>
      <NavBarButtonContainer>
        <a href={data.link}>{data.text}</a>
      </NavBarButtonContainer>
    </>
  );
}

export default NavBarButton;

const NavBarButtonContainer = styled.nav`
  a{
    color: ${colors.colorWhite};
    font-family: ${fonts.kanit};
    font-size: 1.2rem;
    text-transform: uppercase;
    transition-duration: .3s;
    margin: 0 1.5rem;
  }
  a:hover {
    cursor: pointer;
    color: ${colors.colorPrimary}
    
  }
`;
