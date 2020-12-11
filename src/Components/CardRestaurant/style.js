import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  margin: auto;
  height: 150px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  overflow: hidden;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  min-height: 188px;
  max-height: max-content;
  margin: auto;
  margin-bottom: 8px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #a5a5a5;
`;
export const Image = styled.img`
  width: 100%;
  height: 180px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const Title = styled.p`
  color: #5cb646;
  font-size: 16px;
  margin: 5px;
  font-weight: bolder;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  margin-top: -20px;
`;

export const Information = styled(Title)`
  color: #b8b8b8;
`;
