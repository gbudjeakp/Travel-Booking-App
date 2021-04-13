import React, { createContext, useContext, useReducer, useEffect } from "react";

import { userReducer, initialState } from "./reducer";

const StateContext = createContext();
const DispatchContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const getCities = async () => {
    try {
      dispatch({ type: "LOADING" });
      const cityListResponse = await fetch("/api/cities", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const cityData = await cityListResponse.json();
      if (cityData) {
        dispatch({ type: "GET_CITIES", payload: cityData });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loadUser = async () => {
    dispatch({ type: "LOADING" });
    try {
      const userRes = fetch("/api/users/auth");
      const userData = await (await userRes).json();
      if (userData.user) {
        dispatch({ type: "AUTHENTICATED", payload: userData });
      } else {
        dispatch({ type: "UNAUTHENTICATED" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUser();
    getCities();
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export const useDispatchContext = () => useContext(DispatchContext);
