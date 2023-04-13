import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import CircleSocialIcon from "../social/CircleSocialIcon";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function ProfileIndexCard({ profile, nombre, subtitle }) {
  return (
    <>
      <ProfileIndexContainer>
        <div
          className="profile_card"
        >
          <div className="top" >
            <img className="profile_photo" src={profile} alt={"Imagen de perfil de Brian Barquesi"}/>
            <p className="profile_name">{nombre}</p>
            <p className="profile_subtitle">{subtitle}</p>
          </div>
          <div className="bottom" >
            <div className="profile_social_sector" >
              <CircleSocialIcon
                Icon={FaLinkedinIn}
                title={"LinkedIn"}
                link={"https://www.linkedin.com/in/brian-barquesi"}
              />
              <CircleSocialIcon
              
                Icon={FaGithub}
                title={"GitHub"}
                link={"https://github.com/briobarbtech"}
              />
              <CircleSocialIcon
                Icon={FaInstagram}
                title={"Instagram"}
                link={"https://www.instagram.com/barquesi.techie/"}
              />
            </div>
          </div>
        </div>
      </ProfileIndexContainer>
    </>
  );
}

export default ProfileIndexCard;

const ProfileIndexContainer = styled.div`
  .top {
    transform: translate(0px, -40px);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    @media(max-width: 1002px){
      opacity: 1;
      transform: translate(0px, -40px);
    }
  }
  .profile_card:hover .top {
    transform: translate(0px, -70px);
    @media(max-width: 1002px){
      opacity: 1;
      transform: translate(0px, -40px);
    }
  }
  .profile_card:hover .bottom {
    transform: translate(0px, -40px);
    opacity: 1;
    transition: opacity 1s ease 0s;
    @media(max-width: 1002px){
      opacity: 1;
      transform: translate(0px, -10px);
    }
  }
  .bottom {
    transform: translate(0px, -80px);
    transition: opacity 0s ease 0s;
    opacity: 0;
    @media(max-width: 1002px){
      opacity: 1;
      transform: translate(0px, -10px);
    }
    
  }
  .profile_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .profile_photo {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: -1px 1px 8px rgba(0, 0, 0, 0.65);
    transition: 1s;
    @media(max-width: 768px){
      width: 200px;
    height: 200px;
    }
  }
  .profile_name {
    margin-top: 20px;
    color: ${colors.colorPrimary};
    font-family: ${fonts.kanit};
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 800;
    text-shadow: -6px 0px 8px rgba(0, 0, 0, 0.65);
    transition: 1s;
    @media(max-width: 768px){
      font-size: 2.5rem;
    }
  }
  .profile_social_sector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 22rem;
    transition: 1s;
    @media(max-width: 768px){
      width: 300px;
      
    }
  }
  .profile_subtitle {
    color: ${colors.colorWhite};
    font-family: ${fonts.archivo_narrow};
    font-size: 1.8rem;
    margin: 10px 0 20px 0;
    text-shadow: -6px 0px 8px rgba(0, 0, 0, 0.65);
    transition: 1s;
    @media(max-width: 768px){
      font-size: 1.3rem;
    }
  }
`;
