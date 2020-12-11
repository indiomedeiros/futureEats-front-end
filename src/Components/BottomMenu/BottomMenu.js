import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../Assets/Img/Avatar";
import Cart from "../../Assets/Img/Cart";
import Home from "../../Assets/Img/Home";

export const Footer = styled.footer`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 60px;
  background-color: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
`;
const IconContainer = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function BottomMenu() {
  const history = useHistory();

  return (
    <Footer>
      <IconContainer onClick={() => history.push("/")}>
        <Home />
      </IconContainer>
      <IconContainer onClick={() => history.push("/cart")}>
        <Cart />
      </IconContainer>

      <IconContainer onClick={() => history.push("/profile")}>
        <Avatar />
      </IconContainer>
    </Footer>
  );
}
