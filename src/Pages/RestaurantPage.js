import React, {useContext} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryComponent from '../Components/CategoryComponent/CategoryComponent';
import useAuthorization from '../Hooks/useAuthetication';
import useRequestData from '../Hooks/useRequestData';
import { LogoRestaurant, MainContainer, RenderContainer } from './Styles/styles';

export default function RestaurantPage() {
  useAuthorization()

  const params = useParams()
  const [restaurantData] = useRequestData(`/restaurants/${params.id}`)
  const categorys = ['Refeição','Refeição','Refeição', 'Acompanhamento', 'Pizza', 'Salgado', 'Bebida', 'Sorvete']
  
  const getCategory = (category) => {
    //placebo Function
  };
  
  return (<MainContainer>
   
      <LogoRestaurant>
          
          <img src={restaurantData && restaurantData.restaurant.logoUrl} alt=""/>
      </LogoRestaurant>
      <CategoryComponent
          arrayCategory={categorys}
          getCategory={getCategory}
      />
      <RenderContainer>

      {restaurantData &&  restaurantData.restaurant.products.map((food)=> {

          return (<div id={food.category} key={food.id}>
            <p>Categoria: <b>{food.category}</b></p>
            <p>Nome : {food.name}</p>
            <p>Descrição: {food.description}</p>
            <img  src={food.photoUrl}/>
            <p>R$ {food.price.toFixed(2)}</p>
            </div>
          )

      })}
      </RenderContainer>
    </MainContainer>
  );
}
