import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import GlobalStateContext from '../Global/GlobalStateContext';
import useAuthorization from '../Hooks/useAuthetication';
import useRequestData from '../Hooks/useRequestData';

export default function RestaurantPage() {
  useAuthorization()


  const {restaurantList} = useContext(GlobalStateContext)
  const params = useParams()
  //requisição direta no state
  const [restaurantData] = useRequestData(`/restaurants/${params.id}`)

  const restaurant = restaurantList.filter(rest=>{
    return rest.id === params.id
  })
   
   

  return (<div>
   
      <div>
          
          <img src={restaurant[0] && restaurant[0].logoUrl} alt=""/>
      </div>

      {restaurantData &&  restaurantData.restaurant.products.map((food)=> {
          return (<div key={food.id}>
            <h1>Categoria: {food.category}</h1>
            <p>Nome : {food.name}</p>
            <p>Descrição: {food.description}</p>
            <img  width="200px" src={food.photoUrl}/>
            <p>R$ {food.price.toFixed(2)}</p>
            </div>
          )

      })}
    </div>
  );
}
