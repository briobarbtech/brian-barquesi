import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { dimensions } from "../utils/dimensions";
import TagSection from "./TagSection";
import SkillsCard from "./cards/SkillsCard";
import icons from '../utils/icons'

function ToolsSection() {
  const skills = [
    { title: "Javascript", value: 3, date: 2022, icon: icons.javascript },
    { title: "Flutter", value: 4, date: 2020, icon: icons.flutter },
    { title: "Python", value: 3, date: 2019, icon: icons.python },
    { title: "JAVA", value: 2, date: 2022, icon: icons.java },
    { title: "Figma", value: 3, date: 2022, icon: icons.figma },
    { title: "HTML5", value: 4, date: 2022, icon: icons.html },
    { title: "CSS3", value: 4, date: 2022, icon: icons.css },
    { title: "GIT", value: 3, date: 2021, icon: icons.git },
    { title: "Trello", value: 3, date: 2022, icon: icons.trello },
    { title: "React", value: 2, date: 2023, icon: icons.react },
  ];

  function createSkillCards(skills) {
    var cards = [];
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      
      cards.push(
        <div key={i}>
          <SkillsCard
            title={skill.title}
            value={skill.value}
            date={skill.date}
            Icon={skill.icon}
          />
        </div>
      );
    }
    return cards;
  }

  return (
    <>
      <ToolsSectionContainer>
        <div className="skills-section">
          <TagSection
            data={{ subtitle: "lo que conozco", title: "herramientas" }}
          />
          <div className="skill-cards">{createSkillCards(skills)}</div>
        </div>
      </ToolsSectionContainer>
    </>
  );
}

export default ToolsSection;

const ToolsSectionContainer = styled.div`
  .skills-section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    background: ${colors.colorFourty};
    padding: ${dimensions.padding_section};
    height: 900px;

  }
  .skill-cards {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    heigth: 500px;
    margin: 50px auto;
    flex-wrap: wrap;
    @media (max-width: 1002px) {
      overflow: auto;
      scroll-behavior: auto;
      width: 80%;
      height: 500px;
      justify-content: space-around;
    }
  }
`;
