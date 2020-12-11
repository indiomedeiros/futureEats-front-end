import React from "react";
import { Orders, Restaurant, OrderDate, Subtotal } from "./styles";

export default function OrderCard(props) {
  const date = new Date(props.date);
  let options = { day: "numeric", month: "long", year: "numeric" };
  const newDate = date.toLocaleDateString("pt-PT", options);
  const formatDate = newDate.split("de ");

  return (
    <Orders>
      <Restaurant>{props.restaurantName}</Restaurant>
      <OrderDate>{formatDate}</OrderDate>
      <Subtotal>SUBTOTAL R${props.totalPrice.toFixed(2)}</Subtotal>
    </Orders>
  );
}
