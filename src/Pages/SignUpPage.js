import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import { api } from "../Services/api";
import Logo from "../Assets/Img/logo-future-eats-invert@3x.png";
import {
  FormContainer,
  LogoInvert,
  Button,
  Login_Sign_Container,
} from "./Styles/styles";
import InputComponent from "../Components/Inputs/InputComponent";

export default function SignUpPage() {
  const history = useHistory();

  const initForm = {
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    usuario: "",
  };
  const [form, onChange] = useForm(initForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const signingUpUser = (event) => {
    if (form.password !== form.confirmPassword) {
      alert("Os Campos Password e Confirme Password devem ser Identicos!");
    } else {
      const body = {
        name: form.usuario,
        email: form.email,
        cpf: form.cpf,
        password: form.password,
      };
      api
        .post("/signup", body)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.data.token);

          history.push("/address_form");
        })
        .catch((error) => {
          alert(
            "Dados Inválidos! Verifique seus dados ou contate nosso suporte!"
          );
          console.log(error.message);
        });
    }
    event.preventDefault();
  };

  return (
    <Login_Sign_Container>
      <LogoInvert src={Logo} />
      <h4>Resgistre-se</h4>
      <FormContainer onSubmit={signingUpUser}>
        <InputComponent
          type="Usuario"
          name="usuario"
          value={form.usuario}
          onChange={handleChange}
          label="Username"
          required
        />
        <InputComponent
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          label="Email"
        />
        <InputComponent
          type="text"
          name="cpf"
          placeholder="111.111.111-10"
          value={form.cpf}
          pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
          onChange={handleChange}
          label="cpf"
          required
        />
        <InputComponent
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <InputComponent
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          label="Confirm"
          required
        />
        <Button>Sign Up</Button>

        <div onClick={() => history.push("/login")}>
          <p>
            Ja Tem Cadastro? <b> Log in</b>{" "}
          </p>
        </div>
      </FormContainer>
    </Login_Sign_Container>
  );
}
