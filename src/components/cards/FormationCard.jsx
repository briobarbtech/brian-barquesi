import React from "react";
import colors from "../utils/colors";

function FormationCard({ source }) {
  function calculateYears(year) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - year;
    return edad;
  }

  const cardStyled = {
    background: colors.colorFourty,
    width: 360,
    height: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  };
  const imageStyled = { width: 260, margin: "auto" };
  const imageContainerStyled = {
    background: colors.colorWhite,
    display: "flex",
    alignItems: "center",
    height: 260,
  };

  const titleStyled = {
    color: colors.colorWhite,
    fontFamily: "Kanit, sans-serif",
    fontSize: 16,
    marginTop: 15,
    fontWeight: "300",
    marginLeft: 5,
  };
  const subtitleStyled = {
    color: colors.colorWhite,
    fontFamily: "Kanit, sans-serif",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
  };
  const institutionStyled = {
    color: colors.colorWhiteSecondary,
    opacity: 0.7,
    fontFamily: "Kanit, sans-serif",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 15,
  };
  return (
    <div style={cardStyled}>
      <div style={imageContainerStyled}>
        <img style={imageStyled} src={source.link} alt={source.alt} />
      </div>
      <p style={titleStyled}>{source.title}</p>
      <div style={{display: 'flex', justifyContent:'space-between'}}>
      <p style={subtitleStyled}>
        {source.year} | {source.duration}
      </p>
      <p style={institutionStyled}>{source.institution}</p>
      </div>
    </div>
  );
}

export default FormationCard;
