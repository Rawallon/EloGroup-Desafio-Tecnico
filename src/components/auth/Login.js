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

// Componentes são arrow function por que informa aos devs
// que não foi feito uso do "this" dentro dele
const Login = ({ login, isAuthenticated }) => {
  // Agregando todos campos do form em uma variavel
  // torna mais facil a leitura do codigo e manipulação
  // já que o usuario não interage com mais de um campo por vez
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  // Destructure para ser usado no component
  const { username, password } = formData;

  // Dada a implementação acima permite com que os campos do form possam ser uncontrolled
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  // Coisas que mudaria:
  // A checagem não precisa ocorrer no componente
  // O que permitiria o uso de useRef
  if (isAuthenticated) {
    return <Redirect to="/board" />;
  }

  // Coisas que mudaria:
  // CreateRef cria uma nova ref a cada re-render
  // O mais efeciente seria usar useRef
  // A diferença principal entre eles é que o useRef retorna o ref da primeira render
  var pwRef = React.createRef();
  var userRef = React.createRef();

  return (
    <Container>
      {/* onSubmit={onSubmit}> */}
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
