import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { dimensions } from "../utils/dimensions";
import TagSection from "./TagSection";
import FormationCard from "./cards/FormationCard";
import { formation } from "../utils/data";

function FormationSection() {
  const createFormationItems = (data) => {
    var itemsCard = [];
    data.forEach((item) => {
      itemsCard.push(
        <div key={itemsCard.length} tabIndex={itemsCard.length} >
          <FormationCard source={item} />
        </div>
      );
    });
    return itemsCard;
  };

  return (
    <>
      <FormationSectionContainer>
        <div className="formation-section">
          <TagSection data={{ title: "formacion", subtitle: "mis estudios" }} />
          <div className="formation-items">
            {createFormationItems(formation)}
          </div>
        </div>
      </FormationSectionContainer>
    </>
  );
}

export default FormationSection;

const FormationSectionContainer = styled.div`
  .formation-section {
    width: 100%;
    height: 900px;
    padding: ${dimensions.padding_section};
    background: ${colors.colorBackgroundSecondary};
    
  }
  .formation-items {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    scroll-behavior: auto;
    @media (max-width: 1002px) {
      width:95%;
      height: 720px;
      justify-content: space-around;
    }
  }
`;
