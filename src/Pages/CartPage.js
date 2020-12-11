import React, { useContext, useState } from "react";
import { OrderDate, Restaurant } from "../Components/OrderCard/styles";
import GlobalStateContext from "../Global/GlobalStateContext";
import useAuthorization from "../Hooks/useAuthetication";
import { api } from "../Services/api";
import edit from '../Assets/Img/edit.png'
import { RenderContainer, AddressContainer, UserData, AddresTitle, UserContainer, EditAddress } from "./Styles/styles";
import { useHistory } from "react-router-dom";
import CardProduto from "../Components/CardProduct/CardProduto";


export default function CartPage() {
  useAuthorization()
  let subTotal = 0;
  const history = useHistory()
  const [buyFood, setBuyFood] = useState(JSON.parse(localStorage.getItem("buyFood")) );
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
          if(arrayBuyFood.products.length <= 0){
            localStorage.removeItem('buyFood')
          }
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
        .post(`/restaurants/${buyFood.restaurant.id}/order`, body)
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
    <RenderContainer marginTop='60px'>

      <AddressContainer>
        <AddresTitle>Endereço de entrega</AddresTitle>
        {adress && <UserData>{adress.address}</UserData>}
        <EditAddress src={edit} onClick={()=> history.push('/address_form')}></EditAddress>
      </AddressContainer>
      <UserContainer>
         <Restaurant>{buyFood && buyFood.restaurant.name}</Restaurant>
         <OrderDate>{buyFood && buyFood.restaurant.address}</OrderDate>
         <OrderDate>{buyFood && 
         buyFood.restaurant.deliveryTime-10 + ' - '+ buyFood.restaurant.deliveryTime + ' Min'}
         </OrderDate>
      </UserContainer>

      {buyFood && buyFood.products &&
        buyFood.products.map((food) => {
          return (
            <CardProduto
            restaurant={buyFood.restaurant}
            id={food.category}
            key={food.id}
            food={food}
            name={food.name}
            image={food.photoUrl}
            description={food.description}
            price={food.price.toFixed(2)}
            onClick={() => removeFoodCart(food)}
            count={food.count}
            
            />
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
    </RenderContainer>
  );
}
