import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { dimensions } from "../utils/dimensions";
import TagSection from "./TagSection";
import SkillsCard from "./cards/SkillsCard";

function ToolsSection() {
  const skills = [
    { title: "Javascript", value: 3, date: 2022 },
    { title: "Flutter", value: 4, date: 2020 },
    { title: "Python", value: 3, date: 2019 },
    { title: "JAVA", value: 2, date: 2022 },
    { title: "Figma", value: 3, date: 2022 },
    { title: "HTML5", value: 4, date: 2022 },
    { title: "CSS3", value: 4, date: 2022 },
    { title: "GIT", value: 3, date: 2021 },
    { title: "Trello", value: 3, date: 2022 },
    { title: "React", value: 2, date: 2023 },
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
            date={skill.data}
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
    width: 70%;
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
