import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import useAuthorization from "../Hooks/useAuthetication";
import { goToRestaurantPage } from "../Coordination/coordinator";
import SearchIcon from "@material-ui/icons/Search";
import {
  MainContainer,
  SearchInput,
  SearchContainer,
  RenderContainer,
  DivFeedScroll,
} from "./Styles/styles";
import useRequestData from "../Hooks/useRequestData";
import CategoryComponent from "../Components/CategoryComponent/CategoryComponent";
import CardRestaurant from "../Components/CardRestaurant/CardRestaurant";

export default function FeedPage() {
  useAuthorization();

  const history = useHistory();
  const {
    restaurantList,
    Categorys,
    filterList,
    setFilterList,
    setRestaurantList,
  } = useContext(GlobalStateContext);

  const getCategory = (category) => {
    const restaurants = restaurantList.filter((restaurant) => {
      if (category === "Todos") {
        return restaurant.category 
      } else {
        return restaurant.category === category;
      }
    });
    setFilterList(restaurants);
  };

  const [data] = useRequestData("/restaurants");

  useEffect(() => {
    if (data) {
      setRestaurantList(data.restaurants);
    }
  }, [data]);

  const filterName = (event) => {
    const restaurants = restaurantList.filter((restaurant) => {
      if (event.target.value === "") {
        return restaurant.name === restaurant.name;
      } else {
        let nameLowerCase = restaurant.name.toLowerCase();
        return nameLowerCase.includes(event.target.value.toLowerCase());
      }
    });
    setFilterList(restaurants);
  };
  return (
    <MainContainer>
      <SearchContainer>
        <SearchIcon fontSize="inherit" />
        <SearchInput
          type="text"
          onChange={filterName}
          placeholder="search restaurants"
        />
      </SearchContainer>
      <DivFeedScroll>
        <CategoryComponent
          arrayCategory={Categorys}
          getCategory={getCategory}
        />
      </DivFeedScroll>
      <RenderContainer>
        {filterList.length > 0 ? (
          filterList.map((restaurant) => {
            return (
              <CardRestaurant
                key={restaurant.id}
                onClick={() => goToRestaurantPage(history, restaurant.id)}
                restaurant={restaurant.name}
                image={restaurant.logoUrl}
                deliveryTime={
                  restaurant.deliveryTime -
                  10 +
                  " - " +
                  restaurant.deliveryTime +
                  " Min"
                }
                deliveryPrice={"Frete" +" " + "R$" + " " + restaurant.shipping.toFixed(2)}
              />
            );
          })
        ) : (
          <div>
            <p>{"Nao encontramos :("} </p>
          </div>
        )}
      </RenderContainer>
    </MainContainer>
  );
}
