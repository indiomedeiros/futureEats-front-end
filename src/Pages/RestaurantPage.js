import React from "react";

import { useHistory, useParams } from "react-router-dom";
import CardRestaurant from "../Components/CardRestaurant/CardRestaurant";
import CategoryComponent from "../Components/CategoryComponent/CategoryComponent";
import { goToCartPage } from "../Coordination/coordinator";
import CardProduto from "../Components/CardProduct/CardProduto";
import useAuthorization from "../Hooks/useAuthetication";
import useRequestData from "../Hooks/useRequestData";
import { MainContainer, RenderContainer } from "./Styles/styles";

export default function RestaurantPage() {
  useAuthorization();
  // const {buyFood, setBuyFood} = useContext(GlobalStateContext)
  const params = useParams();
  const [restaurantData] = useRequestData(`/restaurants/${params.id}`);

  const categorys = [
    "Refeicao",
    "Acompanhamento",
    "Pizza",
    "Salgado",
    "Bebida",
    "Sorvete",
  ];
  const history = useHistory();
  const getCategory = (category) => {
    //placebo Function
  };

  
  return (
    <MainContainer>
      <CategoryComponent arrayCategory={categorys} getCategory={getCategory} />
      <RenderContainer>
        <CardRestaurant
          image={restaurantData && restaurantData.restaurant.logoUrl}
          restaurant={restaurantData && restaurantData.restaurant.name}
          category={restaurantData && restaurantData.restaurant.category}
          deliveryTime={
            restaurantData &&
            restaurantData.restaurant.deliveryTime -
              10 +
              " - " +
              restaurantData.restaurant.deliveryTime +
              " Min"
          }
          deliveryPrice={
            restaurantData &&
            "Frete R$" + restaurantData.restaurant.shipping.toFixed(2)
          }
          address={restaurantData && restaurantData.restaurant.address}
        />

        {restaurantData &&
          restaurantData.restaurant.products.map((food) => {
            return (
              <CardProduto
                restaurant={params.id}
                id={food.category}
                key={food.id}
                food={food}
                name={food.name}
                image={food.photoUrl}
                description={food.description}
                price={food.price.toFixed(2)}
              />
              // <p>Categoria: <b>{food.category}</b></p>
              // <p>Nome :{food.name}</p>
              // <p>Descrição:{food.description}</p>

              // <p>R$ {food.price.toFixed(2)}</p>
              // <button onClick={() => {addFoodCart(food)}}>adicionar</button>
              // </CardProduto>
            );
          })}
      </RenderContainer>
    </MainContainer>
  );
}
