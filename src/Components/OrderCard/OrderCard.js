import React from "react";
import moment from "moment";


export default function OrderCard(props) {

const date = new Date(props.date);
  let options = { day: 'numeric', month: 'long', year: 'numeric' }
  const newDate = (date.toLocaleDateString('pt-PT', options));
  const formatDate = newDate.split("de ")

  return (
    <>
    <p>{props.restaurantName}</p>
    <p>{formatDate}</p>
    <h4>SUBTOTAL R${props.totalPrice}</h4>
    
    </>
  );
}
