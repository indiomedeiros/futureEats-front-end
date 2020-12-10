import React, { useContext, useState } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import useAuthorization from "../Hooks/useAuthetication";
import { api } from "../Services/api";

export default function CartPage() {
  useAuthorization()
  let subTotal = 0;
  //compras no localStorage passadas da RestaurantPage
  const [buyFood, setBuyFood] = useState(
    JSON.parse(localStorage.getItem("buyFood"))
  );
  //opção de pagamento
  const [paymentMethod, setPaymentMethod] = useState("");
  const {setDisplay} = useContext(GlobalStateContext)
  const adress = JSON.parse(localStorage.getItem("user"));

  
  buyFood && buyFood.products &&
    buyFood.products.forEach((food) => {
      //quantidade
      subTotal += food.price * food.count;
    });

  const removeFoodCart = (foodRemoving) => {
    //remove o produto do carrinho/state/localStorage
    if (localStorage.getItem("buyFood")) {
      const arrayBuyFood = JSON.parse(localStorage.getItem("buyFood"));
      const valueFood = arrayBuyFood.products.findIndex(
        (food) => food.id === foodRemoving.id
      );
      if (valueFood > -1) {
        if (arrayBuyFood.products[valueFood].count <= 1 ) {
          arrayBuyFood.products.splice(valueFood, 1);
          localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
          setBuyFood(arrayBuyFood);
        } else {
          arrayBuyFood.products[valueFood].count -= 1;
          localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
          setBuyFood(arrayBuyFood);
          
        }
      }
    }
  };

  const onSubmitBuyFood = (event) => {
    event.preventDefault();

    //array de produtos para fazer requisição
    if (buyFood && paymentMethod) {
      const body = {
        products: buyFood.products.map((food) => { 
          return { id: food.id, quantity: food.count };
        }),
        paymentMethod: paymentMethod,
      };
      console.log("body", body);
      
      //requisição 
      api
        .post(`/restaurants/${buyFood.restaurant}/order`, body)
        .then((response) => {
          console.log("compra", response.message)
          localStorage.removeItem("buyFood")
          setBuyFood(undefined)
          setDisplay(true)
        })
        .catch((error) => {
          alert("Já existe um pedido em andamento")
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>endereço de entrega</h1>
      {adress && <h5>{adress.address}</h5>}
      {console.log("adress", adress.address)}
      {console.log("buyFood - CartPage", buyFood)}
      {buyFood && buyFood.products &&
        buyFood.products.map((food) => {
          return (
            <div>
              <h1>{food.category}</h1>
              <p>{food.description}</p>
              <p>{food.name}</p>
              <img width="50px" src={food.photoUrl} />
              <p>
                {(food.price * food.count).toFixed(2)}, quantidade: {food.count}
              </p>
              <button onClick={() => removeFoodCart(food)}>remover</button>
            </div>
          );
        })}
      <p>R${subTotal.toFixed(2)}</p>
      <h3>Forma de pagamento</h3>
      <form onSubmit={onSubmitBuyFood}>
        <input
          id="dinheiro"
          onChange={() => setPaymentMethod("money")}
          type="radio"
          name="pagamento"
        />
        <label for="dinheiro"> Dinheiro</label>
        <br />
        <input
          id="cartão de crédito"
          onChange={() => setPaymentMethod("creditcard")}
          name="pagamento"
          type="radio"
        />
        <label for="cartão de crédito"> Cartão de crédito</label>
        <br />
        {/* botão só aparece se houver opção de pagamento selecionada e produto no carrinho*/}
        {subTotal !== 0 && paymentMethod && <button>Confirmar pedido</button>}
        {/* possíveis mensagens de erro*/}
        {subTotal === 0 && <p> *não existe produtos no carrinho</p>}
        {!paymentMethod && <p>*escolha uma opção de pagamento</p>}
      </form>

      {console.log("formBuy", paymentMethod)}
    </div>
  );
}
