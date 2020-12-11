import React from "react";
import {
  Container,
  Title,
  Image,
  InfoContainer,
  TitleContainer,
  Information,
} from "./style";

export default function CardRestaurant(props) {
  return (
    <Container onClick={props.onClick}>
      <Image src={props.image} />
      <TitleContainer>
        <Title>{props.restaurant}</Title>
      </TitleContainer>
      {props.category && (
        <InfoContainer>
          <Information>{props.category}</Information>
        </InfoContainer>
      )}
      <InfoContainer>
        <Information>{props.deliveryTime}</Information>
        <Information>{props.deliveryPrice}</Information>
      </InfoContainer>
      {props.address && (
        <InfoContainer>
          <Information>{props.address}</Information>
        </InfoContainer>
      )}
    </Container>
  );
}
