import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect} from "react";
import useRequestData from '../Hooks/useRequestData'

export const GlobalState = (props) => {
    const [restaurantData] = useRequestData('/restaurants')
    const [restaurantList, setRestaurantList] = useState([])

    useEffect(()=>{
        setRestaurantList(restaurantData)
    }, [restaurantData])

    const providerValue = {
      restaurantList : restaurantList,
    }



    return (
        <div>
     <GlobalStateContext.Provider value={providerValue}>  
        {props.children}
      </GlobalStateContext.Provider>
        </div>
    )
}