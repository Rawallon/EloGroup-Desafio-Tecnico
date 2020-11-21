import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import { Container } from '../styles/GlobalStyle';
import {
  LeadContainer,
  LeadTitle,
  CardContainer,
  LeadButton,
} from '../styles/BoardStyle';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { moveCard } from '../../actions/leads';
import ModalLead from './modal/ModalLead';
import { Link } from 'react-router-dom';

function App({ lists, cards, moveCard }) {
  const onDragEnd = (res) => {
    const { destination, source, draggableId } = res;
    if (!destination) return;
    moveCard(destination, source, draggableId);
  };
  return (
    <>
      <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
        <ModalLead />
        <Container>
          <LeadContainer>
            <LeadTitle>Painel de leads</LeadTitle>
            <Link to="/add-lead">
              <LeadButton>Novo Lead (+) </LeadButton>
            </Link>
            <CardContainer>
              {Object.keys(lists).map((listID, index) => {
                const list = lists[listID];

                const listCards = list.cards.map((cardID) => cards[cardID]);
                return (
                  <List
                    key={list.title}
                    id={listID}
                    title={list.title}
                    cards={listCards}
                  />
                );
              })}
            </CardContainer>
          </LeadContainer>
        </Container>
      </DragDropContext>
    </>
  );
}
App.propTypes = {
  lists: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired,
  moveCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  lists: state.lists,
  cards: state.cards,
});

export default connect(mapStateToProps, { moveCard })(App);
