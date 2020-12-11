import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const TitleBar = styled.h4`
  width: 360px;
  height: 24px;
  margin-top: 90px;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 black;
  background-color: #ffffff;
`;

export const EditProfile = styled.img`
  width: 24px;
  height: 24px;
  margin: 16px 16px 2px 320px;
  object-fit: contain;
  position: absolute;
`;

export const EditAddress = styled.img`
  right: 30px;
  object-fit: contain;
  position: absolute;
`;

export const OrderBar = styled.h4`
  width: 360px;
  height: 20px;
  margin-top: 10px;
  //margin-bottom: 10px;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 black;
  background-color: #ffffff;
`;

export const UserData = styled.p`
  margin: 8px 0 0 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: -0.39px;
  color: black;
`;
export const AddresTitle = styled.p`
  margin: 8px 0px 0px 16px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;
export const UserContainer = styled.div`
  width: 360px;
  height: 106px;
  margin: 0px 0;
  padding: 5px;
  position: relative;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 76px;
  padding: 16px 0px;
  background-color: #eeeeee;
`;

export const Login_Sign_Container = styled(MainContainer)`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 4;
  background-color: white;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: max-content;
  width: 100%;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  position: absolute;
  top: 70px;
  left: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  border-radius: 2px;
  border: solid 1px grey;
  font-size: 30px;
  padding-left: 20px;
`;

export const RenderContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
`;
export const LogoInvert = styled.img`
  width: 112px;
  height: 65px;
`;

export const Button = styled.button`
  width: 80%;
  border: none;
  outline: none;
  color: black;
  background-color: #5fb74a;
  height: 42px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;
export const SearchInput = styled.input`
  width: 90%;
  height: 45px;

  border: none;
  outline: none;
  font-size: 20px;
`;
export const DivPayment = styled.div`
  width: 100%;
`;

export const PaymentMethodTitle = styled.h3`
  width: 90%;
  height: 18px;
  margin: 24px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  border-bottom: solid 1px #000000;
  padding-bottom: 8px;
`;

export const DivStatusPhone = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Hours = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: bolder;
  letter-spacing: normal;
  color: #030303;
`;
export const Bar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  width: 91px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;
export const DivProductsBuy = styled.div`
  width: 100%;
`;
export const RestaurantName = styled.h2`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;
export const RestaurantAdress = styled(RestaurantName)`
  margin: 8px 16px;
  color: #b8b8b8;
`;
export const DivSubTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Freight = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: -0.39px;
  color: #000000;
`;
export const SubTotal = styled.p`
  display: inline-block;
  margin: 15px 16px 25px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: -0.39px;
  color: black;
`;
export const SubTotalNumber = styled.p`
  display: inline-block;
  width: 164px;
  height: 21px;
  margin: 13px 16px 24px 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
`;
export const PaymentMethodInput = styled.input`
  width: 20px;
  height: 20px;
  background-color: #000000;
  margin: 8px 0px 0px 18px;
`;
export const PaymentMethodLabel = styled.label`
  width: 296px;
  height: 18px;
  margin: 11px 16px 11px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;
export const ButtonPayCartEnable = styled.button`
  width: 90%;
  height: 42px;
  margin: 19px 16px 80px 16px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
  border: none;
  outline: none;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bolder;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
`;
export const ButtonPayCartDisenable = styled(ButtonPayCartEnable)`
  background-color: gray;
`;
