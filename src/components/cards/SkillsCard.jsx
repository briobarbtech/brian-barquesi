import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import fonts from "../../utils/fonts";
import { ReactComponent as Icon } from "../../assets/react.svg";
import colors from "../../utils/colors";

function SkillsCard({ title, value, date }) {
  function coloringStars(value) {
    let starsColors = [];
    for (let i = 0; i <= 5; i++) {
      if (i <= value) {
        starsColors.push({ color: colors.colorYellow });
      } else {
        starsColors.push({ color: colors.colorTertiary });
      }
    }
    return starsColors;
  }

  const starsColors = coloringStars(value);

  return (
    <>
      <SkillCardContainer>
        <div className="skill-card">
          <Icon />
          <div className="skill-card_info">
            <p className="skill-card_title">{title}</p>
            <ul>
              <li>
                <FaStar style={starsColors[1]} />
              </li>
              <li>
                <FaStar style={starsColors[2]} />
              </li>
              <li>
                <FaStar style={starsColors[3]} />
              </li>
              <li>
                <FaStar style={starsColors[4]} />
              </li>
              <li>
                <FaStar style={starsColors[5]} />
              </li>
            </ul>
            <p className="skill-card_date">Desde {date}</p>
          </div>
        </div>
      </SkillCardContainer>
    </>
  );
}

export default SkillsCard;

const SkillCardContainer = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }
  .skill-card {
    padding: 0 5px 0 5px;
    width: 210px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 1002px){
      padding: 0;
      border-radius: 10px;
      background: ${colors.colorSecondary};
      height: 70px;
      width: 300px;
      margin-bottom: 20px;
      justify-content: space-between;
      marign: 10px auto;
    }
  }
  .skill-card:hover {
    border-radius: 15px;
    background: ${colors.colorSecondary};
    align-items: center;
    justify-content: space-around;
  }
  .skill-card_info {
    font-weight: 300;

    visibility: hidden;
    @media(max-width: 1002px){
      
      display: flex;
      justify-content: space-between;

      visibility: visible;
    }
  }
  .skill-card:hover .skill-card_info{
    visibility: visible;

  }
  .skill-card_date {
    color: ${colors.colorWhite};
    margin-top: 5px;
    font-family: ${fonts.kanit};
    font-size: 1.4rem;
    font-align: center;
    @media(max-width: 1002px){
  
      visibility: hidden;
    }
  }
  .skill-card_title {
    color: ${colors.colorWhite};
    font-family: ${fonts.kanit};
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 5px;
    font-align: center;
  }
`;
