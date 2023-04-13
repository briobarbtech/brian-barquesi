import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

function SkillsCard({ title, value, date, img }) {
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
            <img src={img} className="skill-card_icon" alt={`Icono de ${title}`}/>
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    transition: 0.3s;
    @media (max-width: 1002px) {
      grid-template-columns: 1fr 2fr 2fr;
      margin-bottom: 5px;
      grid-gap: 10px;
      grid-template-rows: 1fr;
      max-width: 100%;
      max-height: 60px;
      background: ${colors.colorSecondary};
    }
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
    @media (max-width: 1002px) {
      grid-row: 1;
      grid-column: 1;
      
    }
  }
  .skill-card_icon {
    @media (max-width: 1002px) {
      width: 40px;
      height: 40px;
    }
  }
  .skill-card_title {
    transition: 0.3s;
    grid-row: 2;
    font-family: ${fonts.kanit};
    font-weight: 500;
    font-size: 1.2rem;
    color: ${colors.colorWhite};
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    @media (max-width: 1002px) {
      grid-column: 2;
      grid-row: 1;
      visibility: visible;
    }
  }

  ul {
    transition: 0.3s;
    grid-row: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    visibility: hidden;
    @media (max-width: 1002px) {
      grid-column: 3;
      grid-row: 1;
      visibility: visible;
    }
  }
  .skill-card_date {
    transition: 0.3s;
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
      display: none;
    }
  }
`;
