import React from "react";
import { useHistory } from "react-router-dom";
import InputComponent from "../Components/Inputs/InputComponent";
import useAuthorization from "../Hooks/useAuthetication";
import { useForm } from "../Hooks/useForm";
import { api } from "../Services/api";
import { Button, FormContainer, RenderContainer } from "../Pages/Styles/styles";
import styled from "styled-components";

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const TextContainer = styled.div`
  position: sticky;
  margin-top: 2px;
  margin-bottom: 5%;
  z-index: 2;
`;

export default function EditProfilePage() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
 
  const [form, onChange] = useForm({
    name: user.name,
    email: user.email,
    cpf: user.cpf,
  });
  useAuthorization();
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const updateProfile = (event) => {
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
    };
    api
      .put("/profile", body)
      .then((response) => {
        const newUser = {
          ...user,
          name: form.name,
          email: form.email,
          cpf: form.cpf,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("Dados atualizados com sucesso!");
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });

    event.preventDefault();
  };

  return (
    <RenderContainer>
      <EditContainer>
        <TextContainer>
          <h4>Editar</h4>
        </TextContainer>
        <FormContainer onSubmit={updateProfile}>
          <InputComponent
            label="Nome"
            type="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <InputComponent
            label="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <InputComponent
            label="CPF"
            type="text"
            name="cpf"
            value={form.cpf}
            pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
            onChange={handleChange}
            required
          />
          <Button>Salvar</Button>
        </FormContainer>
      </EditContainer>
    </RenderContainer>
  );
}
