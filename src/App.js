import React, { useState } from 'react';
import Input from './components/Input';
import Calculator from './Calculator';

export default function App() {
  
 const[foodItems,setFoodItems]=useState([])
 
  function handleChange(e){
    if(e.key=="Enter"){
      let newItems=e.target.value;
      e.target.value=""
      let newFood=[...foodItems,newItems];
      setFoodItems(newFood);
    }
  
  }

  return (
    <>
   
    <Input handleChange={handleChange}/>
    {foodItems.map((food)=><li key={food}>{food}</li>) }

    <Calculator/>
    <Container/>
    </>
  );
}
