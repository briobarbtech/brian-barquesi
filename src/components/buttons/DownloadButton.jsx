import {React, useState} from 'react'
import styled from 'styled-components';
import colors from '../../utils/colors'
import fonts from '../../utils/fonts';

function DownloadButton(props) {
  return (
    <>
    <DownloadButtonContainer><button className='button_download'>{props.content}</button></DownloadButtonContainer>
      
    </>
  )
}

export default DownloadButton

const DownloadButtonContainer = styled.div`
  .button_download{
    
    width: 200px;
    height: 50px;
    background: #BD4640;
    color: ${colors.colorWhite};
    border-radius: 10px;
    font-family: ${fonts.kanit};
    font-size: 1.2rem;
    border-color: transparent;
  }
  .button_download:hover {
    background: ${colors.colorBackgroundSecondary};
    color: ${colors.colorPrimary};
    border-color: ${colors.colorPrimary};
  }
`