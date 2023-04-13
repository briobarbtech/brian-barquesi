import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import { lorem } from "../../utils/data";
import fonts from "../../utils/fonts";

function AboutMeInfo() {

  return (
    <>
      <AboutMeInfoContainer>
          <p className="about-me_description">{lorem}</p>
      </AboutMeInfoContainer>
    </>
  );
}

export default AboutMeInfo;

const AboutMeInfoContainer = styled.div`

  .about-me_description {
    
    color: ${colors.colorWhite};
    font-family: ${fonts.kanit};
    font-size: 1.2rem;
    width: 100%;
    line-height: 30px;
    font-weight: 300;
    padding-bottom: 10px;
    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }
    @media (max-width: 720px) {
      font-size: 1rem;
    }
    @media (max-width: 400px) {
      font-size: .9rem;
    }
  }
  .tag_card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
