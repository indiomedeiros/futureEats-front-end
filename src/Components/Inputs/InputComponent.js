import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const MyTextField = styled(TextField)`
  width: 100%;
`;

export const InputContainer = styled.div`
  margin: auto;
  margin-bottom: 8px;
  height: 56px;
  width: 80%;
`;

export default function InputComponent(props) {
  return (
    <InputContainer>
      <MyTextField
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        pattern={props.pattern}
        variant="outlined"
        required
      />
    </InputContainer>
  );
}
