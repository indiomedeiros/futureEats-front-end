import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect } from "react";
import { api } from "../Services/api";

export const GlobalState = (props) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [addressMessage, setAddressMessage] = useState("");
  const [filterList, setFilterList] = useState(restaurantList);
  const [profile, setProfile] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);
  const [display, setDisplay] = useState(undefined);
  const Categorys = [
    "Todos",
    "Hamburguer",
    "Todos",
    "Hamburguer",
    "Todos",
    "Hamburguer",
    "Árabe",
    "Italiana",
    "Asiática",
    "Mexicana",
    "Carnes",
    "Baiana",
    "Sorvetes",
  ];

  useEffect(() => {
    setFilterList(restaurantList);
    getActiveOrder();
  }, [restaurantList]);

  const getActiveOrder = () => {
    api.defaults.headers.common["auth"] = localStorage.getItem("token");
    api("/active-order")
      .then((response) => {
        setDisplay(response.data.order);
      })
      .catch((error) => {
        console.log("ActiveOrder", error);
      });
  };

  const providerValue = {
    restaurantList: restaurantList,
    setRestaurantList: setRestaurantList,
    addressMessage: addressMessage,
    setAddressMessage: setAddressMessage,
    Categorys: Categorys,
    setFilterList: setFilterList,
    filterList: filterList,
    profile: profile,
    setProfile: setProfile,
    orderHistory: orderHistory,
    setOrderHistory: setOrderHistory,
    display: display,
    setDisplay: setDisplay,
  };

  return (
    <GlobalStateContext.Provider value={providerValue}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
