import React from 'react';
import { useParams } from 'react-router-dom';
import useAuthorization from '../Hooks/useAuthetication';
import useRequestData from '../Hooks/useRequestData';

export default function RestaurantPage() {
  //parametros passados da FeedPage
  const params = useParams()
  //requisição direta no state
  const [restaurantData] = useRequestData(`/restaurants/${params.id}`)
  useAuthorization()
   
   

  return (<div>
      {/* console de monitoramento dedados */}
      {console.log(restaurantData && restaurantData.restaurant.products)}
      {/* mapeamento dos dados com condição */}
      {restaurantData &&  restaurantData.restaurant.products.map((food)=> {
          return (<div key={food.id}>
            <h1>Categoria: {food.category}</h1>
            <p>Nome do restaurante: {food.name}</p>
            <p>Descrição: {food.description}</p>
            <img  width="200px" src={food.photoUrl}/>
            <p>R$ {food.price.toFixed(2)}</p>
            </div>
          )

      })}
    </div>
  );
}
