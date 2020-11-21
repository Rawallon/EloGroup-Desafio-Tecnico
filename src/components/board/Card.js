import React from 'react';
import { CardBody } from '../styles/BoardStyle';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';
const Card = ({ id, index, text, showModal }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          onClick={(e) => showModal(id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <CardBody>{text}</CardBody>
        </div>
      )}
    </Draggable>
  );
};

export default connect(null, { showModal })(Card);
