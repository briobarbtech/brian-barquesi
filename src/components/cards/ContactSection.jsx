import React from "react";
import colors from "../../utils/colors";
import InputForm from "../inputs/InputForm";
import TextAreaForm from "../inputs/textAreaForm";
import Keyboard from "../../assets/img/keyboard.jpg";
import SendForm from "../buttons/SendForm";
import TagSection from "../TagSection";
import styled from "styled-components";
import { dimensions } from "../../utils/dimensions";

function ContactSection() {
  const formStyled = {
    background: colors.colorWhite,
    borderRadius: 15,
    height: "fit-content",
    width: "fit-content",
    padding: 35,
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  };
  return (
    <ContactSectionContainer>
      <form className="form-section" action="">
            <InputForm placeholder={"Nombre y apellido"} />
            <InputForm placeholder={"Asunto"} />
            <InputForm placeholder={"Email"} />
            <TextAreaForm placeholder={"Mensaje"} />
            <SendForm content={"Enviar"} />
          </form>
      <div className="contact-section">
        <div className="contact-section-bg">
          <TagSection
            data={{ title: "Contacto", subtitle: "Correo Electrónico" }}
          />
        </div>
        <div className="contact-section-empty"></div>
        
      </div>
    </ContactSectionContainer>
  );
}

export default ContactSection;

const ContactSectionContainer = styled.div`
  .contact-section {
    display: flex;
    height: 720px;
  }
  .contact-section-bg {
    padding: ${dimensions.padding_section};
    width: 60%;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.85) 4%,
        rgba(0, 212, 255, 0) 100%
      ),
      url(${Keyboard});
  }
  .contact-section-empty {
    width: 40%;
    background: ${colors.colorBackgroundSecondary};
  }
  .form-section {
    position: absolute;
    right: 25%;
    top: 120%;
    background: ${colors.colorWhite};
    border-radius: 15px;
    height: fit-content;
    width: "fit-content";
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

{
  /* <form className="form-section" action="">
            <InputForm placeholder={"Nombre y apellido"} />
            <InputForm placeholder={"Asunto"} />
            <InputForm placeholder={"Email"} />
            <TextAreaForm placeholder={"Mensaje"} />
            <SendForm content={"Enviar"} />
          </form> */
}
