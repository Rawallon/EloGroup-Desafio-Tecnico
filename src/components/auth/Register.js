import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import {
  ContentForm,
  ButtonForm,
  FormField,
  InputField,
  InputLabel,
} from '../styles/AuthStyle';
import { Container } from '../styles/GlobalStyle';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: '',
  });
  const { username, password, password2 } = formData;

  //Redir se estiver logado!
  if (isAuthenticated) {
    return <Redirect to="/board" />;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2)
      return setAlert('As senhas não estão iguais', 'danger');

    if (password.length < 8)
      return setAlert('A senha deve ter pelo menos oito caracteres', 'danger');

    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/gm;
    if (regex.exec(password) === null) {
      return setAlert(
        'Sua senha deve conter contendo ao menos, um carácter especial, numérico e alfanumérico',
        'danger',
      );
    }

    register({ username, password });
  };

  var pwRef = React.createRef();
  var pw2Ref = React.createRef();
  var userRef = React.createRef();

  return (
    <Container>
      <ContentForm onSubmit={(e) => onSubmit(e)}>
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
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
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
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
