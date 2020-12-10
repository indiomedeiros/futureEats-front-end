import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 112px;
  margin: auto;
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1px solid #a5a5a5;
  position: relative;
`;
const Image = styled.img`
  width: 35%;
  height: 112px;
  border-radius: 10px 0px 0px 10px;
`;

const Title = styled.p`
  color: #5cb646;
  font-size: 16px;
  margin: 5px 20px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`;
const Price = styled(Title)`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  flex-grow: 1;
`;

const Information = styled(Title)`
  color: #b8b8b8;
  font-size: 16px;
`;
const CountContainer = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  display: ${(props) => (props.display ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  height: 33px;
  width: 33px;
  border: 1px solid #5cb646;
  border-radius: 0px 10px 0px 10px;
  color: #5cb646;
  font-size: 16px;
`;
const AddButton = styled.button`
  outline: none;
  border-radius: 10px 0px 10px 0px;
  background-color: white;
  font-size: 15px;
  width: 90px;
  height: 31px;
  display: ${(props) => (props.display ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  color: #5cb646;
  border: 1px solid #5cb646;
  position: absolute;
  bottom: -1px;
  right: -1px;
`;
const RemoveButton = styled(AddButton)`
  color: red;
  border: 2px solid red;
  display: ${(props) => (props.display ? "none" : "flex")};
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  font-size: 20px;
  outline: none;
`;
const Button = styled.button`
  width: 100%;
  font-size: 16px;
  height: 20px;
  align-items: center;
  justify-content: center;
  color: #5cb646;
  border: none;
  background-color: white;
  text-transform: uppercase;
  text-align: end;
`;

export default function CardProduto(props) {
  const [display, setDisplay] = useState(true);
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setShowCount(true);
      setDisplay(false);
    } else {
      setShowCount(false);
      setDisplay(true);
    }
    if(props.onClick){
      setShowCount(true);
      setDisplay(false);
    }
  }, [count]);

  const addFoodCart = (food) => {
    setSelect(false);
    const newFood = { ...food, count: Number(count) };

    if (localStorage.getItem("buyFood")) {
      const arrayBuyFood = JSON.parse(localStorage.getItem("buyFood"));
      const valueFood = arrayBuyFood.products.findIndex(
        (food) => food.id === newFood.id
      );

      if (valueFood > -1) {
        arrayBuyFood.products[valueFood].count += Number(count);
        localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
      } else {
        const arrayBuyFood = JSON.parse(localStorage.getItem("buyFood"));
        if (props.restaurant.id === arrayBuyFood.restaurant.id) {
          arrayBuyFood.products.push(newFood);
          localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
        } else {
          alert("seu carrinho já contém um item de outro restaurante");
          setCount(0)
        }
      }
      // seta a primeira vez
    } else {
      const arrayBuyFood = {
        products: [newFood],
        restaurant: props.restaurant,
      };
      localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
    }
    console.log("food", newFood);
  };

  const RemoveFoodCart = (food) => {
    setCount(0);
    const arrayBuyFood = JSON.parse(localStorage.getItem("buyFood"));
    const newArrayFood = arrayBuyFood.products.filter((item) => {
      return item.id !== food.id;
    });
    arrayBuyFood.products = newArrayFood;
    if (arrayBuyFood.products.length === 0) {
      localStorage.removeItem("buyFood");
      console.log("fintro newarrayBuyFod");
    } else {
      localStorage.setItem("buyFood", JSON.stringify(arrayBuyFood));
    }
  };

  return (
    <Container>
      <CountContainer display={showCount}>{props.count? props.count : count}</CountContainer>
      <Image src={props.image} />
      <InfoContainer>
        <Title>{props.name}</Title>
        <Information>{props.description}</Information>
        <Price>R${props.price}</Price>
      </InfoContainer>
      <AddButton onClick={() => setSelect(true)} display={display}>
        Adicionar
      </AddButton>
      <RemoveButton
      
        onClick={props.onClick? props.onClick : () => RemoveFoodCart(props.food)}
        display={display}
      >
        Remover
      </RemoveButton>

      <dialog open={select}>
        <Input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <Button onClick={() => addFoodCart(props.food)}>
          adicionar pedido
        </Button>
      </dialog>
    </Container>
  );
}
