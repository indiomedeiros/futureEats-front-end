import React from "react";

import {useParams } from "react-router-dom";
import CardRestaurant from "../Components/CardRestaurant/CardRestaurant";
import CategoryComponent from "../Components/CategoryComponent/CategoryComponent";
import CardProduto from "../Components/CardProduct/CardProduto";
import useAuthorization from "../Hooks/useAuthetication";
import useRequestData from "../Hooks/useRequestData";
import { MainContainerRestaurant, RenderContainer } from "./Styles/styles";

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
  const getCategory = (category) => {
    //placebo Function
  };

  return (
    <MainContainerRestaurant>
      <CategoryComponent arrayCategory={categorys} getCategory={getCategory} />
      <RenderContainer marginTop="180px">
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
                restaurant={restaurantData.restaurant}
                id={food.category}
                key={food.id}
                food={food}
                name={food.name}
                image={food.photoUrl}
                description={food.description}
                price={food.price.toFixed(2)}
              />
            );
          })}
      </RenderContainer>
    </MainContainerRestaurant>
  );
}
