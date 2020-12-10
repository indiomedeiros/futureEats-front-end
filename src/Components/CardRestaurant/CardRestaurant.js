import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width:90%;
  min-height: 188px;
  max-height: max-content;
  margin: auto;
  margin-bottom: 8px;
  border-radius: 10px;
  overflow: hidden;
  border:1px solid #a5a5a5 ;
`
const Image = styled.img`
    width: 100%;
    height: 120px;
`

const TitleContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`
const Title = styled.p`
    color: #5CB646;
    font-size: 16px;
    margin: 5px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    margin-top: -20px;
`

const Information = styled(Title)`
    color: #B8B8B8;
`


export default function CardRestaurant(props) {
  return (
    <Container onClick={props.onClick}>
        <Image src={props.image}/>
        <TitleContainer>
             <Title>{props.restaurant}</Title>
        </TitleContainer>
        {props.category && <InfoContainer>
            <Information>{props.category}</Information>
        </InfoContainer>}
        <InfoContainer>
            <Information>{props.deliveryTime}</Information>
            <Information>{props.deliveryPrice}</Information>
        </InfoContainer>
        {props.address && <InfoContainer>
            <Information>{props.address}</Information>
        </InfoContainer>}
    </Container>
  );
}
