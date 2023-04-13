import React from "react";
import styled from "styled-components";
import TagSection from "./TagSection";
import colors from "../utils/colors";
import { dimensions } from "../utils/dimensions";
import CreateServiceItems from "../utils/functions/CreateServiceItems";


function ServicesSection() {
  

  return (
    <>
      <ServicesSectionContainer>
        <section className="service-section">
          <TagSection
            data={{ title: "mis servicios", subtitle: "lo que hago" }}
          ></TagSection>
          <div className="services-cards"><CreateServiceItems /></div>
        </section>
      </ServicesSectionContainer>
    </>
  );
}

export default ServicesSection;

const ServicesSectionContainer = styled.div`
  .service-section {
    padding: ${dimensions.padding_section};
    background: ${colors.colorFourty};
  }
  .services-cards {
    display: flex;
    padding-top: 40px;
    justify-content: space-around;
    @media (max-width: 1002px) {
      flex-direction: column;
    }
  }
`;
