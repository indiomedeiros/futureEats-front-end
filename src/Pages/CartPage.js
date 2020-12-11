import React, { useContext, useState } from "react";

import GlobalStateContext from "../Global/GlobalStateContext";
import useAuthorization from "../Hooks/useAuthetication";
import { api } from "../Services/api";
import edit from "../Assets/Img/edit.png";
import {
  RenderContainer,
  AddressContainer,
  UserData,
  AddresTitle,
  EditAddress,
  PaymentMethodTitle,
  SubTotal,
  DivPayment,
  Bar,
  Title,
  RestaurantName,
  RestaurantAdress,
  Freight,
  PaymentMethodInput,
  PaymentMethodLabel,
  ButtonPayCartDisenable,
  ButtonPayCartEnable,
  DivProductsBuy,
  DivSubTotal,
} from "./Styles/styles";
import { useHistory } from "react-router-dom";
import CardProduto from "../Components/CardProduct/CardProduto";

export default function CartPage() {
  useAuthorization();
  //contador subtotal
  let subTotal = 0;
  const history = useHistory();
  const [buyFood, setBuyFood] = useState(
    JSON.parse(localStorage.getItem("buyFood"))
  );
  //contador de frete
  let shipping = 0;
  const [paymentMethod, setPaymentMethod] = useState("");
  const { setDisplay } = useContext(GlobalStateContext);
  const adress = JSON.parse(localStorage.getItem("user"));


  buyFood &&
    buyFood.products &&
    buyFood.products.forEach((food) => {
      //calculo para a subtotal e frete
      shipping = buyFood.restaurant.shipping;
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
        if (arrayBuyFood.products[valueFood].count <= 1) {
          arrayBuyFood.products.splice(valueFood, 1);
          localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
          if (arrayBuyFood.products.length <= 0) {
            localStorage.removeItem("buyFood");
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

      //requisição
      api
        .post(`/restaurants/${buyFood.restaurant.id}/order`, body)
        .then((response) => {
          localStorage.removeItem("buyFood");
          setBuyFood(undefined);
          setDisplay(true);
          alert("Pedido Realizado! Bom apetite!");
          history.push("/");
        })
        .catch((error) => {
          alert("Já existe um pedido em andamento");
          console.log(error);
        });
    }
  };

  return (
    <RenderContainer bottom='100px'>
      <Bar>
        <Title>Meu Carrinho</Title>
      </Bar>
      <AddressContainer>
        <AddresTitle>Endereço de entrega</AddresTitle>
        {adress && <UserData>{adress.address}</UserData>}
        <EditAddress
          src={edit}
          onClick={() => history.push("/address_form")}
        ></EditAddress>
      </AddressContainer>
      <DivProductsBuy>
        <RestaurantName>{buyFood && buyFood.restaurant.name}</RestaurantName>
        <RestaurantAdress>
          {buyFood && buyFood.restaurant.address}
        </RestaurantAdress>
        <RestaurantAdress>
          {buyFood &&
            buyFood.restaurant.deliveryTime -
              10 +
              " - " +
              buyFood.restaurant.deliveryTime +
              " Min"}
        </RestaurantAdress>

        {buyFood &&
          buyFood.products &&
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

        <Freight>Frete R$ {shipping.toFixed(2)}</Freight>
        <DivSubTotal>
          <SubTotal>SUBTOTAL</SubTotal>
          <SubTotal>R$ {subTotal.toFixed(2)}</SubTotal>
        </DivSubTotal>
      </DivProductsBuy>
      <DivPayment>
        <PaymentMethodTitle>Forma de pagamento</PaymentMethodTitle>
        <form onSubmit={onSubmitBuyFood}>
          <div>
            <PaymentMethodInput
              id="dinheiro"
              onChange={() => setPaymentMethod("money")}
              type="radio"
              name="pagamento"
            />
            <PaymentMethodLabel for="dinheiro">Dinheiro</PaymentMethodLabel>
          </div>
          <PaymentMethodInput
            id="cartão de crédito"
            onChange={() => setPaymentMethod("creditcard")}
            name="pagamento"
            type="radio"
          />
          <PaymentMethodLabel for="cartão de crédito">
            Cartão de crédito
          </PaymentMethodLabel>

          {/* botão só aparece se houver opção de pagamento selecionada e produto no carrinho*/}
          {subTotal !== 0 && paymentMethod && (
            <ButtonPayCartEnable>Confirmar pedido</ButtonPayCartEnable>
          )}
        </form>

        {(!subTotal || !paymentMethod) && (
          <ButtonPayCartDisenable>Confirmar pedido</ButtonPayCartDisenable>
        )}
      </DivPayment>
    </RenderContainer>
  );
}
