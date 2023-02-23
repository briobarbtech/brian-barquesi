import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

function SkillsCard({ title, value, date, Icon }) {
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
          <div className="skill-card_icon_container">
            <Icon className="skill-card_icon" />
          </div>
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
      </SkillCardContainer>
    </>
  );
}

export default SkillsCard;

const SkillCardContainer = styled.div`
  .skill-card {
    display: grid;
    width: 310px;
    height: 163px;
    padding: 5px 10px;
    border-radius: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    transition: .3s;
  }
  .skill-card:hover {
    
    background: ${colors.colorSecondary};
  }
  .skill-card:hover .skill-card_title {
    visibility: visible;
  }
  .skill-card:hover ul {
    visibility: visible;
  }
  .skill-card:hover .skill-card_date {
    visibility: visible;
  }
  .skill-card_icon_container {
    grid-row: 1 / 6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .skill-card_title {
    transition: .3s;
    grid-row: 2;
    font-family: ${fonts.kanit};
    font-weight: 500;
    font-size: 1.4rem;
    color: ${colors.colorWhite};
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
  }

  ul {
    transition: .3s;
    grid-row: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    visibility: hidden;
  }
  .skill-card_date {
    transition: .3s;
    font-family: ${fonts.kanit};
    color: ${colors.colorWhite};
    grid-row: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-align: center;
    visibility: hidden;
    @media (max-width: 1002px) {
      visibility: hidden;
    }
  }
`;

/* .skill-card_icon {
  width: 50%;
  @media(min-width: 1002px){
    width: 90%;
  }
}
.skill-card_icon_container{
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    @media(max-width: 1002px){
      
      grid-column: 3;

    }
  }
  .skill-card {
    padding: 0 5px 0 5px;
    width: 210px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 1002px){
      display: grid;
      grid-template-columns: 1fr 2fr 2fr;
      width: 300px;
      height: 80px;
      padding: 0;
      background: ${colors.colorSecondary};
     
    }
  }
  .skill-card:hover {
    background: ${colors.colorSecondary};
  }
  .skill-card_info {
    font-weight: 300;
    visibility: hidden;
    @media(max-width: 1002px){
      visibility: visible;
      display: grid;
      grid-column: 2;
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
  } */
