import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect} from "react";

export const GlobalState = (props) => {

     const [restaurantList, setRestaurantList] = useState([])
     const [addressMessage, setAddressMessage] = useState('')
     const [filterList, setFilterList] = useState(restaurantList);
     const [profile, setProfile ]= useState({})
     const [orderHistory, setOrderHistory] = useState([])
     const Categorys = ['Todos',"Hamburguer",'Todos',"Hamburguer", 'Todos',"Hamburguer", "Árabe", "Italiana", "Asiática","Mexicana","Carnes","Baiana","Sorvetes"]

     useEffect(() => {
      
          setFilterList(restaurantList)
       
     }, [restaurantList])

      
      const providerValue = {
        restaurantList : restaurantList,
        setRestaurantList: setRestaurantList,
        addressMessage : addressMessage,
        setAddressMessage: setAddressMessage,
        Categorys: Categorys,
        setFilterList: setFilterList,
        filterList: filterList,
        profile: profile,
        setProfile: setProfile,
        orderHistory: orderHistory,
        setOrderHistory: setOrderHistory
      }
      
      
      

    return (
      
     <GlobalStateContext.Provider value={providerValue}>  
        {props.children}
      </GlobalStateContext.Provider>
     
    )
}