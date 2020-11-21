import React from 'react';
import Card from './Card';
import { CardColumn, CardTitle } from '../styles/BoardStyle';
import { Droppable } from 'react-beautiful-dnd';
const List = ({ id, title, cards }) => {
  return (
    <>
      <CardColumn>
        <CardTitle>{title}</CardTitle>
        <Droppable droppableId={id}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  index={index}
                  id={card.id}
                  text={card.name}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </CardColumn>
    </>
  );
};

export default List;
