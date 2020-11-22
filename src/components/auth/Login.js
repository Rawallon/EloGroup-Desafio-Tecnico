import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import {
  ContentForm,
  ButtonForm,
  InputField,
  InputLabel,
  FormField,
} from '../styles/AuthStyle';
import { Container } from '../styles/GlobalStyle';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/board" />;
  }

  var pwRef = React.createRef();
  var userRef = React.createRef();
  return (
    <Container>
      <ContentForm onSubmit={(e) => onSubmit(e)}>
        <FormField>
          <InputField
            required
            type="text"
            name="username"
            ref={(ip) => (userRef = ip)}
            onChange={(e) => onChange(e)}
            value={username}
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
            ref={(ip) => (pwRef = ip)}
            placeholder=""
          />
          <InputLabel
            typed={password.length > 0}
            htmlFor="password"
            onClick={() => {
              pwRef.focus();
            }}>
            Senha
          </InputLabel>
        </FormField>
        <ButtonForm>Entrar</ButtonForm>
      </ContentForm>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
