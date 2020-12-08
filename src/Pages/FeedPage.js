import React, {useContext, useState, useEffect} from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';
import {useHistory} from 'react-router-dom'

export default function FeedPage() {
  const history = useHistory()
  const {restaurantList, addressMessage} = useContext(GlobalStateContext)
  const [filterList, setFilterList] = useState(restaurantList)

  const getCategory = (category)=>{

    const restaurants = restaurantList.filter(restaurant=>{
      return restaurant.category === category
    })
    setFilterList(restaurants)
  }

  useEffect(()=>{
    if(filterList.length === 0 ){
      setFilterList(restaurantList)
    }
    console.log(filterList)
  }, [filterList, restaurantList])

  const filterName = (event)=>{
    const restaurants = restaurantList.filter(restaurant=>{
      if(event.target.value === ''){
        return restaurant.name === restaurant.name
      }else{
      
        return restaurant.name.includes(event.target.value)
      }
    })
    setFilterList(restaurants)
  }
  return (
   <div>
     <div>FutureEats</div>
        <div>
          <input type='text' onChange={filterName} placeholder='search restaurants'/>
        </div>
     <div>
        <ul>
        <li onClick={()=> getCategory('Pestiscos')}>Todos</li>
          <li onClick={()=> getCategory('Hamburguer')}>Hamburguer</li>
          <li onClick={()=> getCategory('Árabe')}>Árabe</li>
          <li onClick={()=> getCategory('Italiana')}>Italiana</li>
          <li onClick={()=> getCategory('Asiática')}>Asiática</li>
          <li onClick={()=> getCategory('Mexicana')}>Mexicana</li>
          <li onClick={()=> getCategory('Carnes')}>Carnes</li>
          <li onClick={()=> getCategory('Baiana')}>Baiana</li>
          <li onClick={()=> getCategory('Sorvetes')}>Sorvetes</li>
        </ul>
     </div>
     {
       filterList && filterList.map(restaurant=>{
         return <div>
           <p>{restaurant.name} <b>{restaurant.category}</b></p>
            <button onClick={()=>history.push(`/restaurant/${restaurant.id}`)}>Go to Store</button>
         </div>
       })
     }
     {
       addressMessage && <div>
         <h4>{addressMessage}</h4>
    
       </div>
     }
   </div>
  );
}
