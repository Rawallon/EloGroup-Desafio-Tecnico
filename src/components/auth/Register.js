import React from 'react';
import {
  ContentForm,
  ButtonForm,
  InputForm,
  FormField,
  InputField,
  InputLabel,
} from '../styles/AuthStyle';
import { Container } from '../styles/GlobalStyle';

const Register = () => {
  var pwRef = React.createRef();
  var pw2Ref = React.createRef();
  var userRef = React.createRef();

  return (
    <Container>
      <ContentForm>
        <FormField>
          <InputField
            required
            type="text"
            name="username"
            ref={(ip) => (userRef = ip)}
            placeholder=""
          />
          <InputLabel
            onClick={() => {
              userRef.focus();
            }}
            htmlFor="username">
            Usuário
          </InputLabel>
        </FormField>

        <FormField>
          <InputField
            required
            type="text"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
            ref={(ip) => (pwRef = ip)}
            placeholder=""
          />
          <InputLabel
            onClick={() => {
              pwRef.focus();
            }}
            htmlFor="password">
            Senha
          </InputLabel>
        </FormField>
        <FormField>
          <InputField
            required
            type="text"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
            ref={(ip) => (pw2Ref = ip)}
            placeholder=""
          />
          <InputLabel
            onClick={() => {
              pw2Ref.focus();
            }}
            htmlFor="password">
            Confirmação da senha
          </InputLabel>
        </FormField>
        <ButtonForm>Entrar</ButtonForm>
      </ContentForm>
    </Container>
  );
};

export default Register;
