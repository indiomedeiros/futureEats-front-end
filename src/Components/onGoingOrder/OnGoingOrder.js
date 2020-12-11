import React, { useContext } from "react";
import styled from "styled-components";
import GlobalStateContext from "../../Global/GlobalStateContext";

export const Container = styled.div`
  display: flex;
  height: 118px;
  width: 100vw;
  
  background-color: #56b646;
  align-items: center;
  position: fixed;
  bottom: 45px;
  left: 0px;
`;
const IconContainer = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;
const P = styled.p`
  font-weight: bolder;
  color: white;
  font-size: 16px;
  font-family: roboto;
  margin: 0px 0px 0px 0px;
`;
const Name = styled(P)`
  margin: 5px 0px 0px 0px;
  color: black;
  font-weight: bold;
`;
const Price = styled.h4`
  margin: 2px 0px;
`;
export default function OnGoingOrder(props) {
  const { display } = useContext(GlobalStateContext);

  return (
    <>
      {display && display.totalPrice && (
        <Container>
          <IconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M17 9h-2v8.525L22 22l1-1.748-6-3.793V9zm-1 18C9.922 27 5 22.078 5 16S9.922 5 16 5s11 4.922 11 11-4.922 11-11 11zm-.014-25C8.258 2 2 8.272 2 16s6.258 14 13.986 14C23.728 30 30 23.728 30 16S23.728 2 15.986 2z"
              />
            </svg>
          </IconContainer>
          <InfoContainer>
            <P>Pedido em andamento</P>
            <Name>{display.restaurantName}</Name>
            <Price>SUBTOTAL: R${display.totalPrice.toFixed(2)}</Price>
          </InfoContainer>
        </Container>
      )}
    </>
  );
}
