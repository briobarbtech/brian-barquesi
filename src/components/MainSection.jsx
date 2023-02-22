import React, {useContext}from "react";
import styled from "styled-components";
import banner from "../assets/img/banner_index.jpg";
import ProfileIndexCard from "./cards/ProfileIndexCard";
import profile from "../assets/img/profile.png";
import { AppContext } from "../context/AppContext";
function MainSection() {
  const burguerButtonState = useContext(AppContext)

  return (
    <div>
      <MainContainer>
        <section className="banner">
          <div className={burguerButtonState.burgerState.isActive ? 'hidden': 'visible'}>
            <ProfileIndexCard profile={profile} nombre={"Brian Barquesi"} subtitle={'Técnico Superior en desarrollo de software'}/>
          </div>
        </section>
      </MainContainer>
    </div>
  );
}

export default MainSection;
const MainContainer = styled.div`
  .banner {
    width: auto;
    height: 820px;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, .3) 50%,
        rgba(0, 0, 0, 1) 100%
      ),
      url(${banner});
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1002px) {
      background-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.3) 24%, rgba(30,34,51,1) 75%, rgba(30,34,51,1) 90%, rgba(30,34,51,1) 100%),
      url(${banner});
      height: 520px;
    }
  }
  .hidden{
    opacity: 0;
    transition: 0.3s;
  }
`;
