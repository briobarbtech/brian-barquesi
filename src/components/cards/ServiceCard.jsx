import React, { useContext } from "react";
import styled from "styled-components";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import { AppContext } from "../../context/AppContext";

function ServiceCard({ data }) {
  const servicesStates = useContext(AppContext);

  var isActive = servicesStates.servicesStates.states;

  function stateHandler(index) {
    console.log(isActive);
    servicesStates.servicesStates.changeServiceState(index);
  }
  return (
    <>
      <ServiceCardContainer>
        <div className="services_section-0">
          <div>
            <div className="services_card">
              <data.icon className="service-icon" />
              <h1 className="service-title">{data.title}</h1>
              <span className="span-description">{data.description}</span>
            </div>
          </div>
        </div>
        <div
          className="services_section-1"
          style={{ height: isActive[data.key] ? "350px" : "150px" }}
        >
          <div className="touch-check" onClick={() => stateHandler(data.key)}>
            <div
              className="services_card"
              style={{ height: isActive[data.key] ? "300px" : "100px" }}
            >
              <data.icon className="service-icon" />
              <h1 className="service-title">{data.title} </h1>
              <p className="triangle">▼</p>
              <span
                className="span-description"
                style={{ opacity: isActive[data.key] ? 1 : 0 ,display: isActive[data.key] ? 'block' : 'none' }}
              >
                {data.description}
              </span>
            </div>
          </div>
        </div>
      </ServiceCardContainer>
    </>
  );
}

export default ServiceCard;

const ServiceCardContainer = styled.div`
  .touch-check {
    display: none;
    width: 100%;
    @media (max-width: 1002px) {
      display: block;
    }
  }
  .services_section-0{
    height: 400px;
    transition: 0.3s;
    @media (max-width: 1002px) {
      display: none;
    }
  }
  .services_section-1{
    height: 150px;
    transition: 0.3s;
    @media (min-width: 1002px) {
      display: none;
    }
  }
  .triangle{
    grid-column: 5;
    grid-row: 1;
    display: flex;
    align-items: center;
    padding-top: 5px;
    justify-content: center;
    color: ${colors.colorWhite}
    
  }
  .services_card {
    width: 420px;
    height: 150px;
    border: 2px solid ${colors.colorPrimary};
    border-radius: 15px;
    padding: 10px;
    transition: 0.3s;
    @media (max-width: 1002px) {
      margin: 0 auto;
      width: 420px;
      height: 100px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }
  }
  .services_card:hover {
    height: 350px;
  }
  .services_card:hover .span-description {
    transition: 0.5s ease 0s;
    opacity: 1;
  }
  .service-icon {
    width: 50px;
    height: 70px;
    background-size: 120px 120px;
    background-repeat: no-repeat;
    color: ${colors.colorPrimary};
    margin-bottom: 20px;
    @media (max-width: 1002px) {
      margin: auto;
      grid-column: 1;
      grid-row: 1;
    }
  }
  .service-title {
    color: ${colors.colorWhite};
    font-family: ${fonts.kanit};
    font-size: 1.8rem;
    margin-bottom: 30px;
    text-transform: lowercase;
    @media (max-width: 1002px) {
      width: 100%;
      margin: auto;
      font-size: 1.4rem;
      grid-column: 2/6;
      grid-row: 1;
    }
  }
  .service-title:first-letter {
    text-transform: uppercase;
  }
  .span-description {
    opacity: 0;
    transition: 0.5s;
    font-family: ${fonts.kanit};
    color: ${colors.colorWhite};
    font-size: 1.4rem;
    line-height: 1.5rem;
    @media (max-width: 1002px) {
      padding-top: 30px;
      font-size: 1.2rem;
      grid-column: 1/6;
      grid-row: 2;
    }
  }
`;
