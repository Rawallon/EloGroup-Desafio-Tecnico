import React, { useState } from 'react';
import {
  ContentForm,
  ButtonForm,
  FormField,
  InputField,
  InputLabel,
} from '../styles/AuthStyle';
import { Container } from '../styles/GlobalStyle';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: '',
  });
  const { username, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
            onChange={(e) => onChange(e)}
            value={username}
            ref={(ip) => (userRef = ip)}
            placeholder=""
          />
          <InputLabel
            typed={username.length > 0}
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
            type="password"
            name="password"
            onChange={(e) => onChange(e)}
            value={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
            ref={(ip) => (pwRef = ip)}
            placeholder=""
          />
          <InputLabel
            typed={password.length > 0}
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
            type="password"
            name="password2"
            onChange={(e) => onChange(e)}
            value={password2}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
            ref={(ip) => (pw2Ref = ip)}
            placeholder=""
          />
          <InputLabel
            typed={password2.length > 0}
            onClick={() => {
              pw2Ref.focus();
            }}
            htmlFor="password2">
            Confirmação da senha
          </InputLabel>
        </FormField>
        <ButtonForm>Registrar</ButtonForm>
      </ContentForm>
    </Container>
  );
};

export default Register;
