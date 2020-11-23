import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../../actions/modal';
import PropTypes from 'prop-types';
import { updateCard } from '../../../actions/leads';
import { SeeModal } from './SeeModal';
import { EditModal } from './EditModal';
import { OportSpliter } from '../../../utils/OportSpliter';
import { setAlert } from '../../../actions/alert';

const ModalLead = ({ show, hideModal, cards, updateCard, setAlert }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    createdat: '',
    updatedat: '',
    name: '',
    tel: '',
    email: '',
    oport: [],
    desc: '',
    list: '',
  });
  const card = cards[show];

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onOportChange = (e, index) => {
    setFormData({
      ...formData,
      oport: formData.oport.map((el, i) => {
        if (i === index) {
          return e.target.value;
        } else {
          return el;
        }
      }),
    });
  };

  const saveChanges = (e) => {
    if (
      formData.name === '' ||
      formData.tel === '' ||
      formData.email === '' ||
      formData.oport.join() === ''
    )
      return setAlert('Você deve preencher todos os campos', 'danger');
    updateCard(formData);
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    if (card)
      setFormData({
        id: card.id,
        createdat: card.createdat,
        updatedat: Date.now(),
        name: card.name,
        tel: card.tel,
        email: card.email,
        oport: OportSpliter(card.oport),
        desc: card.desc,
        list: card.list,
      });
  }, [card]);

  if (show === null) return <></>;

  if (!isEditing)
    return (
      <SeeModal
        hideModal={hideModal}
        show={show}
        card={card}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    );

  return (
    <EditModal
      hideModal={hideModal}
      show={show}
      card={card}
      onChange={onChange}
      formData={formData}
      saveChanges={saveChanges}
      setFormData={setFormData}
      onOportChange={onOportChange}
    />
  );
};
ModalLead.propTypes = {
  cards: PropTypes.object.isRequired,
  updateCard: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  show: state.modal,
  cards: state.cards,
});
export default connect(mapStateToProps, { hideModal, updateCard, setAlert })(
  ModalLead,
);
