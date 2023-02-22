import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import fonts from "../utils/fonts";

function TagSection({ data }) {
  
  return (
    <TagSectionContainer>
      <div className="tag_card">
        <h2 className="tag_subtitle">{data.subtitle}</h2>
        <h1 className="tag_title" >{data.title}</h1>
        <div className="tag_underline"></div>
      </div>
    </TagSectionContainer>
  );
}

export default TagSection;

const TagSectionContainer = styled.div`
  .tag_underline {
    width: 70px;
    background: ${colors.colorPrimary};
    height: 2px;
  }
  .tag_title {
    font-family: ${fonts.kanit};
    font-size: 2rem;
    color: ${colors.colorWhite};
    margin-bottom: 4px;
    text-transform: lowercase;
  }
  .tag_title:first-letter {
    text-transform: uppercase;
  }
  .tag_subtitle {
    font-family: ${fonts.kanit};
    color: ${colors.colorPrimary};
    font-size: 1.4rem;
    text-transform: lowercase;
  }
  .tag_subtitle:first-letter {
    text-transform: uppercase;
  }
  .tag_card {
    display: block;
    padding-left: 15px;
  }
`;
