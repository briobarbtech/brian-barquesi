import React, { useContext } from "react";
import styled from "styled-components";
import TagSection from "./TagSection";
import ServiceCard from "./cards/ServiceCard";
import { TbBoxModel, TbFileSearch, TbFileCode } from "react-icons/all";
import colors from "../utils/colors";
import { dimensions } from "../utils/dimensions";
import { AppContext } from "../context/AppContext";

function ServicesSection() {
  const services = [
    {
      title: "análisis de requisitos",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
      icon: TbFileSearch,
    },
    {
      title: "modelado de aplicaciones",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
      icon: TbBoxModel,
    },
    {
      title: "desarrollo de aplicaciones",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
      icon: TbFileCode,
    },
  ];

  function createServiceItems(services) {
    var servicesCard = [];

    for (let i = 0; i < services.length; i++) {
      const service = services[i];

      servicesCard.push(
        <div key={i}>
          <ServiceCard
            data={{
              key: i,
              icon: service.icon,
              title: service.title,
              description: service.description,
            }}
          />
        </div>
      );
    }

    return servicesCard;
  }

  return (
    <>
      <ServicesSectionContainer>
        <section className="service-section">
          <TagSection
            data={{ title: "mis servicios", subtitle: "lo que hago" }}
          ></TagSection>
          <div className="services-cards">{createServiceItems(services)}</div>
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
