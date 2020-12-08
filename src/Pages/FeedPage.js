import React, { useContext, useState, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import useAuthorization from "../Hooks/useAuthetication";
import {goToRestaurantPage} from '../Coordination/coordinator'

export default function FeedPage() {
  useAuthorization();

  const history = useHistory();
  const { restaurantList, addressMessage } = useContext(GlobalStateContext);
  const [filterList, setFilterList] = useState(restaurantList);

  const Categorys = ['Todos',"Hamburguer", "Árabe", "Italiana", "Asiática","Mexicana","Carnes","Baiana","Sorvetes"]
  
  const getCategory = (category) => {
    const restaurants = restaurantList.filter((restaurant) => {
      return restaurant.category === category;
    });
    setFilterList(restaurants);
  };

  useEffect(() => {
    if (filterList.length === 0) {
      setFilterList(restaurantList);
    }
  }, [filterList, restaurantList]);

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
    <div>
      <div>FutureEats</div>
      <div>
        <input
          type="text"
          onChange={filterName}
          placeholder="search restaurants"
        />
      </div>
      <div>
        <ul>
          {
            Categorys.map(category=>{
            return <li onClick={() => getCategory(category)}>{category}</li>

            })
          }
        </ul>
      </div>
      {filterList &&
        filterList.map((restaurant) => {
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
    </div>
  );
}
