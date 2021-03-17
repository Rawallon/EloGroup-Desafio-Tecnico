import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const CheckUserstate = ({
  Auth,
  checkState,
  redirUrl = '/login',
  Component,
}) => {
  const { loading, isAuthenticated } = Auth;
  if (!loading) {
    if (isAuthenticated === checkState) {
      return <Component />;
    } else {
      return <Redirect to={redirUrl} />;
    }
  }
  return null;
};

const mapStateToProps = (state) => ({
  Auth: state.auth,
});

export default connect(mapStateToProps)(CheckUserstate);
