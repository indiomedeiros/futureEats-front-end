import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import useAuthorization from "../Hooks/useAuthetication";
import OrderCard from "../Components/OrderCard/OrderCard";
import useRequestData from "../Hooks/useRequestData";
import {
  UserData,
  AddressContainer,
  AddresTitle,
  OrderBar,
  UserContainer,
  EditAddress,
  EditProfile,
  RenderContainer,
  H4,
  MainContainerProfilePage,
  LogoutContainer,
} from "./Styles/styles";
import edit from "../Assets/Img/edit.png";
import { Title } from "../Components/CardProduct/style";

export default function ProfilePage() {
  const history = useHistory();
  const userProfile = useRequestData("/profile");
  const userOrderHistory = useRequestData("/orders/history");

  useAuthorization();
  const { profile, setProfile, orderHistory, setOrderHistory } = useContext(
    GlobalStateContext
  );

  useEffect(() => {
    if (userProfile[0] && userOrderHistory[0]) {
      setProfile(userProfile[0].user);
      setOrderHistory(userOrderHistory[0].orders);
    } else {
    }
  }, [userProfile, userOrderHistory]);

  return (
    <MainContainerProfilePage>
      <RenderContainer >
        <LogoutContainer>
        <H4>Editar Perfil</H4>
        <Title onClick={()=> {localStorage.clear()
          history.push('/')
        }}>Logout</Title>

        </LogoutContainer>
        <UserContainer>
          <UserData>{profile.name}</UserData>
          <EditProfile
            src={edit}
            onClick={() => history.push("/update_profile")}
          ></EditProfile>
          <UserData>{profile.email}</UserData>
          <UserData>{profile.cpf}</UserData>
        </UserContainer>
        <AddressContainer>
          <AddresTitle>Endereço Cadastrado</AddresTitle>
          <EditAddress
            src={edit}
            onClick={() => history.push("/address_form")}
          ></EditAddress>
          <UserData>{profile.address}</UserData>
        </AddressContainer>
        <OrderBar>Históricos de Pedidos</OrderBar>
        {orderHistory ? (
          orderHistory.map((order) => {
            return (
              <OrderCard
                key={order.createdAt}
                totalPrice={order.totalPrice}
                restaurantName={order.restaurantName}
                date={order.expiresAt}
              />
            );
          })
        ) : (
          <p>Você não realizou nenhum pedido</p>
        )}
      </RenderContainer>
    </MainContainerProfilePage>
  );
}
