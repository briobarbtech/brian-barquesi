import React from "react";
import styled from "styled-components";
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";

function FormationCard({ source }) {
  function calculateYears(year) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - year;
    return edad;
  }

  return (
    <FormationCardContainer>
      <div className="formation-card">
        <div className="formation-card-image_container">
          <img
            className="formation-card-image"
            src={source.link}
            alt={source.alt}
          />
        </div>
        <div className="info-container">
          <p className="formation-card_title">{source.title}</p>
          <div className="formation-card-info">
            <p className="formation-card_subtitle">{source.year} | </p>
            <p className="formation-card_subtitle">{source.duration}</p>
          </div>
        </div>
      </div>
    </FormationCardContainer>
  );
}

export default FormationCard;

const FormationCardContainer = styled.div`
  .formation-card {
    margin: 20px;
    background: ${colors.colorFourty};
    width: 400px;
    height: 360px;
    @media (max-width: 1002px) {
      margin: 5px;
    }
  }
  .formation-card-image_container {
    background: ${colors.colorWhite};
    display: flex;
    align-items: center;
    height: 260px;
  }
  .formation-card-image {
    max-width: 260px;
    margin: auto;
  }
  .info-container {
    max-height: 160px;
    min-height: 100px;
  }
  .formation-card-info {
    min-height: 500px;
    display: flex;
  }
  .formation-card_title {
    color: ${colors.colorWhite};
    font-family: ${fonts.kanit};
    font-size: 1.2rem;
    margin-top: 15px;
    font-weight: 300;
    margin-left: 5px;
    @media (max-width: 1002px) {
      font-size: .8rem;
    }
  }
  .formation-card_subtitle {
    color: ${colors.colorWhite};
    font-family: ${fonts.kanit};
    font-size: 1.2rem;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 5px;
  }
`;
