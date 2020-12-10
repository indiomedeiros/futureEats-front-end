import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import useAuthorization from "../Hooks/useAuthetication";
import {goToRestaurantPage} from '../Coordination/coordinator'
import SearchIcon from '@material-ui/icons/Search';
import {MainContainer, SearchInput, SearchContainer,RenderContainer}from './Styles/styles'
import useRequestData from "../Hooks/useRequestData";
import CategoryComponent from "../Components/CategoryComponent/CategoryComponent";

export default function FeedPage() {
  useAuthorization();

  const history = useHistory();
  const { restaurantList,  
          Categorys, 
          filterList, 
          setFilterList,
          setRestaurantList,
         } = useContext(GlobalStateContext);

  const getCategory = (category) => {
    const restaurants = restaurantList.filter((restaurant) => {
      if(category === 'Todos'){
        return restaurant.category === restaurant.category;
      }else{

        return restaurant.category === category;
      }
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
        <SearchIcon fontSize='inherit'/>
        <SearchInput
          type="text"
          onChange={filterName}
          placeholder="search restaurants"
        />
      </SearchContainer>
     <CategoryComponent
      arrayCategory={Categorys}
      getCategory={getCategory} />

      <RenderContainer>
 
      {filterList.length > 0 ? filterList.map((restaurant) => {
          return (
            <div key={restaurant.id}>
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
        }):<div>
          <h5>nao encontramos :( </h5>
          </div>
    }
      </RenderContainer>
    </MainContainer>
  );
}
