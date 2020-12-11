import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const HeaderTop = styled.footer`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  padding-left: 20px;
  border-bottom: 0.5px solid black;
`;
const IconContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 30px;
`;

export default function Header(props) {
  const history = useHistory();
  return (
    <HeaderTop>
      <IconContainer onClick={() => history.goBack()}>
        <ArrowBackIosIcon fontSize="inherit" />
      </IconContainer>
    </HeaderTop>
  );
}
