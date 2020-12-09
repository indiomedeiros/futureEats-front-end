import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import GlobalStateContext from '../Global/GlobalStateContext';
import useAuthorization from '../Hooks/useAuthetication';
import useRequestData from '../Hooks/useRequestData';

export default function RestaurantPage() {
  useAuthorization()

  const params = useParams()
  //requisição direta no state
  const [restaurantData] = useRequestData(`/restaurants/${params.id}`)

  return (<div>

      <div>
          
          <img src={restaurantData && restaurantData.restaurant.logoUrl} alt=""/>
      </div>
        {restaurantData && console.log(restaurantData)}
      {restaurantData &&  restaurantData.restaurant.products.map((food)=> {

          return (<div key={food.id}>
            <h1>Categoria: {food.category}</h1>
            <p>Nome : {food.name}</p>
            <p>Descrição: {food.description}</p>
            <img src={food.photoUrl}/>
            <p>R$ {food.price.toFixed(2)}</p>
            </div>
          )

      })}
    </div>
  );
}
