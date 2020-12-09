import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import CategoryComponent from '../Components/CategoryComponent/CategoryComponent';
import { goToCartPage } from '../Coordination/coordinator';

import useAuthorization from '../Hooks/useAuthetication';
import useRequestData from '../Hooks/useRequestData';
import { LogoRestaurant, MainContainer, RenderContainer } from './Styles/styles';

export default function RestaurantPage() {
  useAuthorization()
  // const {buyFood, setBuyFood} = useContext(GlobalStateContext)
  const params = useParams()
  const [restaurantData] = useRequestData(`/restaurants/${params.id}`)
  const categorys = ['Refeicao', 'Acompanhamento', 'Pizza', 'Salgado', 'Bebida', 'Sorvete']
  const history = useHistory()
  const getCategory = (category) => {
    //placebo Function
  };

  const addFoodCart = (food) => {
    const newFood = {...food, count: 1}
    
    
    if (localStorage.getItem("buyFood")){
        const arrayBuyFood  = JSON.parse(localStorage.getItem("buyFood"))
        const valueFood = arrayBuyFood.findIndex((food)=> food.id === newFood.id )
        if(valueFood > -1){
          arrayBuyFood[valueFood].count += 1
          localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood))
        }else{
          const arrayBuyFood = [...JSON.parse(localStorage.getItem("buyFood")), newFood]
        localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood))
        }
    }else{  
      const arrayBuyFood = [newFood]
      localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood))
    }
    console.log("food", newFood)
  }  
   

  return (<MainContainer>
   
      <LogoRestaurant>
          
          <img src={restaurantData && restaurantData.restaurant.logoUrl} alt=""/>
      </LogoRestaurant>
      <CategoryComponent
          arrayCategory={categorys}
          getCategory={getCategory}
      />
      <RenderContainer>
      <button onClick={() => {goToCartPage(history)}}>confirmar</button>
      {restaurantData &&  restaurantData.restaurant.products.map((food)=> {

          return (<div id={food.category} key={food.id}>
            <p>Categoria: <b>{food.category}</b></p>
            <p>Nome : {food.name}</p>
            <p>Descrição: {food.description}</p>
            <img  src={food.photoUrl}/>
            <p>R$ {food.price.toFixed(2)}</p>
            <button onClick={() => {addFoodCart(food)}}>adicionar</button>
            </div>
          )

      })}
      
      </RenderContainer>
    </MainContainer>
  );
}
