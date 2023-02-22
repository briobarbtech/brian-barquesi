import React from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

function AboutMeInfo() {
 
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum suspendisse sollicitudin dignissim donec dictumst, odio sapien placerat vehicula rutrum habitasse volutpat. Semper pulvinar in rutrum per penatibus non lectus condimentum blandit, scelerisque sollicitudin faucibus aliquam placerat nec proin vitae maecenas vel, nisi luctus fermentum facilisi vivamus praesent vulputate a.";



  return (
    <>
      <AboutMeInfoContainer>
          <p className="about-me_description">{description}</p>
      </AboutMeInfoContainer>
    </>
  );
}

export default AboutMeInfo;

const AboutMeInfoContainer = styled.div`

  .about-me_description {
    
    color: ${colors.colorWhite};
    font-family: ${fonts.kanit};
    font-size: 1.2rem;
    width: 100%;
    line-height: 30px;
    font-weight: 300;
    padding-bottom: 10px;
    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
    }
    @media (max-width: 720px) {
      font-size: 1rem;
    }
    @media (max-width: 400px) {
      font-size: .9rem;
    }
  }
  .tag_card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
