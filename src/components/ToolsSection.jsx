import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { dimensions } from "../utils/dimensions";
import TagSection from "./TagSection";
import CreateSkillCards from "../utils/functions/CreateSkillCards";

function ToolsSection() {
  

  

  return (
    <>
      <ToolsSectionContainer>
        <div className="skills-section">
          <TagSection
            data={{ subtitle: "lo que conozco", title: "herramientas" }}
          />
          <div className="skill-cards"><CreateSkillCards/></div>
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
    @media (max-width: 1002px) {height:700px}
  }
  .skill-cards {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    scroll-behavior: auto;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    heigth: 500px;
    margin: 50px auto;
    flex-wrap: wrap;
    @media (max-width: 1002px) {
      overflow: auto;
      scroll-behavior: auto;
      width: 100%;
      height: 500px;
      justify-content: space-around;
    }
  }
`;
