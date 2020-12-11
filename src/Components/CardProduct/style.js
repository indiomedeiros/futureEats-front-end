import styled from "styled-components";

export const Container = styled.div`
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
export const Image = styled.img`
  width: 35%;
  height: 112px;
  border-radius: 10px 0px 0px 10px;
`;

export const Title = styled.p`
  color: #5cb646;
  font-size: 16px;
  margin: 5px 20px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`;
export const Price = styled(Title)`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  flex-grow: 1;
`;

export const Information = styled(Title)`
  color: #b8b8b8;
  font-size: 16px;
`;
export const CountContainer = styled.div`
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
export const AddButton = styled.button`
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
export const RemoveButton = styled(AddButton)`
  color: red;
  border: 2px solid red;
  display: ${(props) => (props.display ? "none" : "flex")};
`;

export const Input = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  font-size: 20px;
  outline: none;
`;
export const Button = styled.button`
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
