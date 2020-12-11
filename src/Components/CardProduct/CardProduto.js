import React, { useEffect, useState } from "react";
import { addFoodCart, RemoveFoodCart } from "./script";
import {
  Container,
  CountContainer,
  Image,
  Title,
  Information,
  InfoContainer,
  Price,
  AddButton,
  RemoveButton,
  Input,
  Button,
} from "./style";

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
    if (props.onClick) {
      setShowCount(true);
      setDisplay(false);
    }
  }, [count]);

  return (
    <Container>
      <CountContainer display={showCount}>
        {props.count ? props.count : count}
      </CountContainer>
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
        onClick={
          props.onClick
            ? props.onClick
            : () => RemoveFoodCart(props.food, setCount)
        }
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
        <Button
          onClick={() =>
            addFoodCart(
              props.food,
              setSelect,
              setCount,
              props.restaurant,
              count
            )
          }
        >
          adicionar pedido
        </Button>
      </dialog>
    </Container>
  );
}
