import React, { useContext, useState, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import {api} from '../Services/api'
import useAuthorization from "../Hooks/useAuthetication";
import {goToRestaurantPage} from '../Coordination/coordinator'
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../Assets/Img/logo-future-eats-invert@3x.png'
import {MainContainer, SearchInput, SearchContainer, CategoryContainer, CategoryItem, RenderContainer}from './Styles/styles'
import useRequestData from "../Hooks/useRequestData";

export default function FeedPage() {
  useAuthorization();

  const history = useHistory();
  const { restaurantList, 
          addressMessage, 
          Categorys, 
          filterList, 
          setFilterList,
          setRestaurantList,
          setAddressMessage } = useContext(GlobalStateContext);

  const getCategory = (category) => {
    const restaurants = restaurantList.filter((restaurant) => {
      return restaurant.category === category;
    });
    setFilterList(restaurants);
  };

  const [data] = useRequestData('/restaurants')

  useEffect(()=>{
    if(data){
      setRestaurantList(data.restaurants)

    }

  }, [data])
 

  const filterName = (event) => {
    const restaurants = restaurantList.filter((restaurant) => {
      if (event.target.value === "Todos") {
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
        <SearchIcon fontSize='inherit'/>
        <SearchInput
          type="text"
          onChange={filterName}
          placeholder="search restaurants"
        />
      </SearchContainer>
      <CategoryContainer>
        
          {
            Categorys.map(category=>{
            return <CategoryItem onClick={() => getCategory(category)}>{category}</CategoryItem>

            })
          }
       
      </CategoryContainer>
      <RenderContainer>

      {filterList && filterList.map((restaurant) => {
          return (
            <div>
              <p>
                {restaurant.name} <b>{restaurant.category}</b>
              </p>
              <button
                onClick={() => goToRestaurantPage(history, restaurant.id)}
              >
                Go to Store
              </button>
            </div>
          );
        })}
      {addressMessage && (
        <div>
          <h4>{addressMessage}</h4>
        </div>
      )}
      </RenderContainer>
    </MainContainer>
  );
}
