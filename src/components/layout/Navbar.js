import React from 'react';
import {
  LogoImage,
  NavHeader,
  NavLi,
  NavNav,
  NavUl,
} from '../styles/GlobalStyle';
import Logo from '../../img/logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <NavUl>
      <NavLi>
        <Link to="/board">
          <span>Lista de Lead</span>
        </Link>
      </NavLi>
      <NavLi>
        <Link to="/add-lead">
          <span>Adicionar Lead</span>
        </Link>
      </NavLi>
      <NavLi>
        <a onClick={logout} href="#!">
          <span>Logout</span>
        </a>
      </NavLi>
    </NavUl>
  );

  const guestLinks = (
    <NavUl>
      <NavLi>
        <Link to="/login">Login</Link>
      </NavLi>
      <NavLi>
        <Link to="/register">Registrar</Link>
      </NavLi>
    </NavUl>
  );
  return (
    <NavHeader>
      <NavNav>
        <LogoImage src={Logo} alt="" />
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </NavNav>
    </NavHeader>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
