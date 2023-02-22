import { React, useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

function NavBarContactButton(props) {
  return (
    <>
      <NavBarContactButtonContainer>
        <button>{props.content}</button>
      </NavBarContactButtonContainer>
    </>
  );
}

export default NavBarContactButton;

const NavBarContactButtonContainer = styled.div`
button {
  width: 150px;
  height: 40px;
  background: ${colors.colorTransparent};
  color: ${colors.colorPrimary};
  border-radius: 10px;
  font-samily: ${fonts.kanit};
  font-size: 1.2rem;
  border-color: ${colors.colorPrimary};
  cursor: pointer;
  margin: 0 1.5rem;
  transition-duration: .3s;
  }
  button:hover {
  background: ${colors.colorPrimary};
  color: ${colors.colorWhite};
  }
  `;
