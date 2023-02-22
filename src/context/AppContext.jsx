import React, { createContext, useState } from "react";

export const AppContext = createContext();
export function AppContextProvider(props) {
  const [isActive, setActive] = useState(false);

  const [states, setServices] = useState([false,false,false,false,false,false,false]);

  function setServicesState(index) {
    var newStates = [];
    for (let i = 0; i < index; i++) {
      newStates.push(false);
    }
    setServices(newStates);
  }
  function changeServiceState(index) {
    var newStates = [];
    for (let i = 0; i < states.length; i++) {
      if (i === index) {
        if(states[index] == true){
          newStates.push(false)
        }else{
          newStates.push(true)
        }
      }
      else{
        newStates.push(false)

      }
    }
    setServices(newStates)
  }

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
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
}
