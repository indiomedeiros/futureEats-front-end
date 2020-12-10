import React, { useContext, useState, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import {useHistory} from 'react-router-dom'
import  useAuthorization  from '../Hooks/useAuthetication';
import OrderCard from '../Components/OrderCard/OrderCard'
import useRequestData from "../Hooks/useRequestData";


export default function ProfilePage() {
  const history = useHistory()
  const userProfile = useRequestData("/profile")
  const userOrderHistory = useRequestData("/orders/history")


  useAuthorization()
  const { profile,
    setProfile,
    orderHistory,
    setOrderHistory } = useContext(GlobalStateContext);
  

    useEffect(()=>{
      if (userProfile[0] && userOrderHistory[0]) {
        setProfile(userProfile[0].user)
        setOrderHistory(userOrderHistory[0].orders)
      } else {
        
      }

  
    }, [userProfile, userOrderHistory ])


  return (
    <div>
    <p>Meu Perfil</p>
    <p>{profile.name}</p>
    <p>{profile.email}</p>
    <p>{profile.cpf}</p>
    <p>Endereço Cadastrado</p>
    <p>{profile.address}</p>
    <p>Históricos de Pedidos</p>
    {orderHistory ? orderHistory.map(order => {
                return <OrderCard 
                    key={order.createdAt}
                    totalPrice={order.totalPrice}
                    restaurantName={order.restaurantName}
                    date={order.expiresAt}
                />
            }) : 
            <p>Você não realizou nenhum pedido</p>}
    
    </div>
  );
}
