import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect} from "react";

import {useHistory} from 'react-router-dom'
import {api} from '../Services/api'

export const GlobalState = (props) => {

     const history = useHistory()
     const [restaurantList, setRestaurantList] = useState([])
     const [addressMessage, setAddressMessage] = useState('')

     useEffect(() => {
       
       if(history.location.pathname === '/'){
  
       }else if(history.location.pathname === '/feed'){
          
        api.defaults.headers.common['auth'] = localStorage.getItem('token')
         api.get('/restaurants').then(response=>{
           if(response.data.restaurants){
             console.log(response.data.restaurants)
             setRestaurantList(response.data.restaurants)
           }else{
             console.log(response.data.message)
            setAddressMessage(response.data.message)
           }
         }).catch(error=>{
           console.log(error.message)
         })
          
       }
     }, [history])

      
      const providerValue = {
        restaurantList : restaurantList,
        addressMessage : addressMessage
      }
      
      
      

    return (
        <div>
     <GlobalStateContext.Provider value={providerValue}>  
        {props.children}
      </GlobalStateContext.Provider>
        </div>
    )
}