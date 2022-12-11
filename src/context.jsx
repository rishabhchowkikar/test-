// create a context (warehouse)
// provider
// consumer / useContext{hooks}
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
// import data from "../userdata/userapi.json";

// const API = "userapi.json";

const intialState = {
  name: "",
  image: "",
  services: [],
}; // access by all components

const AppProvider = ({ children }) => {
  // using reducer hooks

  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "TECH FOUNDER",
        image: "./hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "TECH FOUNDER",
        image: "./IMG-20210411-WA0003.jpg",
      },
    });
  };

  // the api data  {use for api geting from the data}
  // const getServices = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     dispatch({ type: "GET_SERVICES", payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //  to call the api
  useEffect(() => {
    // getServices(API);
  }, []);

  return (
    // <AppContext.Provider value={{fname: "Rishabh Chowkikar", age:"20"}}>
    //     {children}
    //     </AppContext.Provider>

    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
