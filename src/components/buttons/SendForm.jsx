import { React, useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

function SendForm(props) {
  return (
    <SendFormButtonContainer>
      <button className="send-form_button">{props.content}</button>
    </SendFormButtonContainer>
  );
}

export default SendForm;

const SendFormButtonContainer = styled.div`
  .send-form_button {
    width: 200px;
    height: 50px;
    background: ${colors.colorPrimary};
    color: ${colors.colorWhite};
    border-radius: 10px;
    font-family: ${fonts.kanit};
    font-size: 1.2rem;
    border-color: ${colors.colorBackgroundSecondary};
    border-width: 0;
  }
  .send-form_button:hover {
    background: ${colors.colorWhiteSecondary};
    border-color: ${colors.colorPrimary};
    color: ${colors.colorPrimary};
  }
`;
