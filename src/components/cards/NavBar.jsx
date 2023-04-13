import React, { useContext } from "react";
import styled from "styled-components";
import logotipo from "../../assets/img/logotipo.png";
import Hamburger from "hamburger-react";
import NavBarButton from "../buttons/NavBarButton";
import NavBarContactButton from "../buttons/NavBarContactButton";
import { AppContext } from "../../context/AppContext";

function NavBar() {
  const context = useContext(AppContext);
  const handleClick = () => {
    context.burgerState.setActive(!context.burgerState.isActive);
  };
  return (
    <>
      <NavBarContainer>
        <div className="navbar">
          <img src={logotipo} className="navbar_logo" alt={"Logo que icluye el texto: Brian developer"}/>

          <ul className={`navbar_link ${context.burgerState.isActive ? "active" : ""}`}>
            <li>
              <NavBarButton data={{ text: "Inicio", link: "" }} />
            </li>
            <li>
              <NavBarButton data={{ text: "Skills", link: "" }} />
            </li>
            <li>
              <NavBarButton data={{ text: "Formación", link: "" }} />
            </li>
            <li>
              <NavBarButton data={{ text: "Proyectos", link: "" }} />
            </li>
            <li>
              <NavBarContactButton content={"Contacto ▼"} />
            </li>
          </ul>
          <div className="burguer_button">
            <Hamburger
              color="#fff"
              toggled={context.burgerState.isActive}
              toggle={handleClick}
            />
          </div>
        </div>
      </NavBarContainer>
    </>
  );
}

export default NavBar;

const NavBarContainer = styled.div`
  .navbar_logo {
    width: 170px;
  }
  a {
    text-decoration: none;
  }
  .navbar {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
  }
  li {
    display: flex;
    align-items: center;
  }
  .navbar_link.active {
    background: rgb(15, 19, 24);
    background: linear-gradient(
      180deg,
      rgba(15, 19, 24, 1) 0%,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0.7091211484593838) 86%,
      rgba(236, 236, 236, 0) 99%
    );
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10%;
    padding-bottom: 30%;
    top: 0;
    left: 0;
    right: 0;
    align-items: center;
  }
  .navbar_link {
    display: block;
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media (min-width: 1002px) {
      position: initial;
      margin: 0;
      display: flex;
    }
  }
  .burguer_button {
    @media (min-width: 1002px) {
      display: none;
    }
  }
`;
