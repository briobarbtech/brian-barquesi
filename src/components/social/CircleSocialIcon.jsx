import { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

function CircleSocialIcon({ Icon, title, link = "/" }) {
  return (
    <>
      <CircleSocialContainer>
          <a href={link} className="button_style">
            <div className="circle_styled" >
              <Icon className="icon_styled" />
            </div>
            <p className="title_styled">{title}</p>
          </a>
      </CircleSocialContainer>
    </>
  );
}

export default CircleSocialIcon;

const CircleSocialContainer = styled.div`
.circle_styled {
  background: ${colors.colorFourty};
  border-radius: 50px;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: -1px 1px 8px rgba(0, 0, 0, 0.65);
  transition: background-color .3s;
  @media(max-width: 1002px){
    background: ${colors.colorFourty}
  }

}
.icon_styled {
  color: ${colors.colorWhiteSecondary};
  width: 2rem;
  height: 2rem;
}
.title_styled {
  color: ${colors.colorWhiteSecondary};
  font-family: ${fonts.kanit};
  font-weight: light;
  font-size: 0.8rem;
  margin-bottom: 5;
  font-align: center;
  text-transform: uppercase;
  text-shadow: -6px 0px 8px rgba(0, 0, 0, 0.65);
  transition: .3s;
}
.button_style:hover .title_styled{
  color: ${colors.colorPrimary};
}

.button_style {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 4.1rem;
}
.button_style:hover .circle_styled{
  background: ${colors.colorPrimary};
}

a{
  text-decoration: none;
}
`;
