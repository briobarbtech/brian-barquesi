import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import TagSection from "./TagSection";
import AboutMeInfo from "./cards/AboutMeInfo";
import DownloadButton from "./buttons/DownloadButton";
import fonts from "../utils/fonts";
import { dimensions } from "../utils/dimensions";

function AboutMeSection({ img }) {
  const info = {
    nombre: "Brian Barquesi",
    edad: "24 Años",
    telefono: "+54 9 2622 316791",
    freelance: "Disponible",
    direccion: "Tunuyán, Mendoza - Argentina",
    estudios: "6 año/s",
  };
  function createItems() {
    var items = [];
    var counter = 0;
    for (var key in info) {
      var value = info[key];
      items.push(
        <div className="item" key={counter}>
          <p className="tag">{key}:</p> <p className="info">{value}</p>
        </div>
      );
      counter++;
    }
    return items;
  }

  return (
    <>
      <AboutMeSectionContainer>
        <div className="container">
          <div className="about-me_tag">
            <TagSection data={{ title: "sobre mi", subtitle: "descubre" }} />
          </div>
          <div className="about-me_img">
            <img src={img} alt="" />
            <div className="about-me_section_resp">
              <AboutMeInfo />
            </div>
          </div>
          <div className="about-me_section">
            <AboutMeInfo />
          </div>
          <div className="about-me_data">{createItems()}</div>
          <div className="about-me_cv">
            <DownloadButton content={"Descargar CV"} />
          </div>
        </div>
      </AboutMeSectionContainer>
    </>
  );
}
export default AboutMeSection;

const AboutMeSectionContainer = styled.div`
.container{
  display grid;
  width: 100%;
  height: 1000px;
  background: ${colors.colorBackgroundSecondary};
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: .3fr .5fr 1.5fr 1fr;
  gap: 30px;
  padding: ${dimensions.padding_section};
  @media(max-width: 1700px){
    grid-template-rows: .3fr .5fr 1fr 1fr;
  }
  @media(max-width: 1002px){
    gap: 0;
    grid-template-rows: .3fr 2fr 1.5fr 1fr;
  }
  @media(max-width: 357px){
    grid-template-rows: .3fr 2.6fr 1.5fr 1fr;
  }
}
img{
  width: 100%;
  @media(max-width: 1002px){
    width: 35%;
    float: right;
  }
}
.about-me_img{
  grid-column: 1/4;
  grid-row: 2/4;
  @media(max-width: 1002px){
    padding: 0 10px;
    float: right;
    grid-column: 1/11;
  }
}
.about-me_section {
  grid-column: 4/10;
  grid-row: 2;
  @media (max-width: 1002px) {
    display:none;
  }
}
.about-me_data {
  width: 100%;
  margin: 0 auto;
  grid-column: 4/10;
  grid-row: 3;
  align-items: left;
  
  border: 1px solid ${colors.colorPrimary};
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1002px) {
    grid-column: 1/11;
    grid-row: 3;
    
      }
}
.about-me_cv{
  grid-column: 4;
  grid-row: 4;
  @media (max-width: 1002px) {
    padding-top: 20px;
    grid-column: 1/4;
    grid-row: 4;
  }
}
.about-me_tag{
  grid-column: 1/3;
  @media (max-width: 1002px) {
    grid-column: 1/7;
      }
}
.about-me_section_resp{
  padding: ${dimensions.padding_section};
  width: 100%;
  @media(min-width: 1002px){
    display:none;
  }
}



  
  
  .tag {
    text-align: left;
    width: 50%;
    font-family: ${fonts.kanit};
    color: ${colors.colorWhite};
    font-weight: 400;
    font-size: 1.2rem;
    margin-left: .5rem;
    @media (max-width: 720px) {
      font-size: .8rem;
    }
  }
  .info {
    width: 50%;
    font-family: ${fonts.kanit};
    font-size: 1.2rem;
    font-weight: 200;
    color: ${colors.colorWhite};
    @media (max-width: 720px) {
      font-size: .8rem;
    }
  }
  .item {
    width: 50%;
    margin-top: 12px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
  }
  .tag:first-letter {
    text-transform: uppercase;
  }
  
`;
