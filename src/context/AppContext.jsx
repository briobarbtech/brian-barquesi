import React, { createContext, useState } from "react";
import icons from "../utils/icons";
import { TbBoxModel, TbFileSearch, TbFileCode } from "react-icons/all";

export const AppContext = createContext();
export function AppContextProvider(props) {
  const [isActive, setActive] = useState(false);

  const [states, setServices] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const setServicesState = (index) => {
    var newStates = [];
    for (let i = 0; i < index; i++) {
      newStates.push(false);
    }
    setServices(newStates);
  };
  const changeServiceState = (index) => {
    var newStates = [];
    for (let i = 0; i < states.length; i++) {
      if (i === index) {
        if (states[index] == true) {
          newStates.push(false);
        } else {
          newStates.push(true);
        }
      } else {
        newStates.push(false);
      }
    }
    setServices(newStates);
  };

  const data = {
    skills: [
      { title: "Javascript", value: 3, date: 2022, icon: icons.javascript },
      { title: "Flutter", value: 4, date: 2020, icon: icons.flutter },
      { title: "Python", value: 3, date: 2019, icon: icons.python },
      { title: "JAVA", value: 2, date: 2022, icon: icons.java },
      { title: "Figma", value: 3, date: 2022, icon: icons.figma },
      { title: "HTML5", value: 4, date: 2022, icon: icons.html },
      { title: "CSS3", value: 4, date: 2022, icon: icons.css },
      { title: "GIT", value: 3, date: 2021, icon: icons.git },
      { title: "Trello", value: 3, date: 2022, icon: icons.trello },
      { title: "React", value: 2, date: 2023, icon: icons.react },
    ],

    profileInformation: {
      nombre: "Brian Barquesi",
      edad: "24 Años",
      telefono: "+54 9 2622 316791",
      freelance: "Disponible",
      direccion: "Tunuyán, Mendoza - Argentina",
      estudios: "6 año/s",
    },
    lorem:
      "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum suspendisse sollicitudin dignissim donec dictumst, odio sapien placerat vehicula rutrum habitasse volutpat. Semper pulvinar in rutrum per penatibus non lectus condimentum blandit, scelerisque sollicitudin faucibus aliquam placerat nec proin vitae maecenas vel, nisi luctus fermentum facilisi vivamus praesent vulputate a.",

    services: [
      {
        title: "análisis de requisitos",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
        icon: TbFileSearch,
      },
      {
        title: "modelado de aplicaciones",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
        icon: TbBoxModel,
      },
      {
        title: "desarrollo de aplicaciones",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipiscing elit venenatis ullamcorper porttitor cubilia, duis aliquam nunc urna. Facilisis eros quisque varius justo mollis fringilla turpis sodales, consequat platea fermentum.",
        icon: TbFileCode,
      },
    ],
  };

  return (
    <>
      <AppContext.Provider
        value={{
          burgerState: {
            isActive: isActive,
            setActive: setActive,
          },
          servicesStates: {
            states: states,
            setServices: setServicesState,
            changeServiceState: changeServiceState,
          },
          data: data,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
}
