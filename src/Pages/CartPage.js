import React, { useContext, useState } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";

export default function CartPage() {
  let subTotal = 0
  const [buyFood, setBuyFood] = useState(
    JSON.parse(localStorage.getItem("buyFood"))
  );
  const adress = JSON.parse(localStorage.getItem("user"));
  
  buyFood && buyFood.forEach(food => {
    //quantidade
    subTotal += food.price * food.count

  });

  return (
    <div>
      <h1>endereço de entrega</h1>
      <h5>{adress.address}</h5>
      {console.log("adress", adress.address)}
      {console.log("buyFood - CartPage", buyFood)}
      {buyFood &&
        buyFood.map((food) => {
          
          return (
            <div>

              <p>{food.category}</p>
              <p>{food.description}</p>
              <p>{food.name}</p>
              <img  width="50px" src={food.photoUrl}/>
              <p>{food.price.toFixed(2)}</p>

            </div>
          );
        })}
      <p>R${subTotal.toFixed(2)}</p>
    </div>
  );
}
