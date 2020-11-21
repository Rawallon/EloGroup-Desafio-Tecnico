import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { remAlert } from '../../actions/alert';
import { AlertBox, AlertWrapper } from '../styles/AlertStyle';
const Alert = ({ alerts, remAlert }) => {
  return (
    <AlertWrapper>
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <AlertBox
            type={alert.alertType}
            key={alert.id}
            onClick={(e) => remAlert(alert.id)}>
            {alert.msg}
          </AlertBox>
        ))}
    </AlertWrapper>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  remAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, { remAlert })(Alert);
