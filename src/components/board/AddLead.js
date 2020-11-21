import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AddLeadContainer, LeadButton, LeadInput } from '../styles/BoardStyle';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/leads';
function AddLead({ addCard }) {
  const [formClosed, setFormClosed] = useState(true);
  const [leadTexto, setleadTexto] = useState('');
  if (formClosed)
    return (
      <LeadButton onClick={(e) => setFormClosed(!formClosed)}>
        Novo Lead (+)
      </LeadButton>
    );

  return (
    <>
      <AddLeadContainer>
        <LeadInput
          onChange={(e) => setleadTexto(e.target.value)}
          value={leadTexto}
        />
        <LeadButton
          onClick={(e) => {
            setleadTexto('');
            setFormClosed(!formClosed);
            addCard(leadTexto);
          }}>
          Add
        </LeadButton>
      </AddLeadContainer>
    </>
  );
}
AddLead.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default connect(null, { addCard })(AddLead);
