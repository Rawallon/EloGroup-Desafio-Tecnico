import React from 'react';
import {
  ModalBox,
  ModalDim,
  ModalDimWrapper,
  ModalContainer,
  ModalSub,
  ModalField,
  ModalFieldTitle,
  ModalTitleContainer,
  ModalTitleHeader,
  ModalOport,
  ModalTitleText,
  ModalContent,
  ModalBttn,
} from '../../styles/ModalStyle';
import { formatPhoneNumber } from '../../../utils/formatPhoneNumber';
import { OportSpliter } from '../../../utils/OportSpliter';
import formatDate from '../../../utils/formatDate';

export function SeeModal({ show, hideModal, card, isEditing, setIsEditing }) {
  return (
    <>
      <ModalDimWrapper show={show !== null}>
        <ModalContainer>
          <ModalBox show={show !== null}>
            <ModalField>
              <ModalTitleContainer>
                <ModalTitleHeader>
                  <ModalTitleText>{card.name}</ModalTitleText>
                  <ModalBttn onClick={(e) => setIsEditing(!isEditing)}>
                    Editar
                  </ModalBttn>
                </ModalTitleHeader>
                <ModalSub>Criado em {formatDate(card.createdat)}</ModalSub>
                <ModalSub>
                  {card.updatedat &&
                    `Alterado em ${formatDate(card.updatedat)}`}
                </ModalSub>
              </ModalTitleContainer>
            </ModalField>
            <ModalField>
              <ModalFieldTitle>Contato</ModalFieldTitle>
              <ModalContent>Email: {card.email}</ModalContent>
              <ModalContent>Tel.: {formatPhoneNumber(card.tel)}</ModalContent>
            </ModalField>
            <ModalField>
              <ModalFieldTitle>Oportunidades</ModalFieldTitle>
              <ModalContent>
                {OportSpliter(card.oport).map((item) => (
                  <ModalOport key={item}>{item}</ModalOport>
                ))}
              </ModalContent>
            </ModalField>
            {card.desc.length > 0 && (
              <ModalField>
                <ModalFieldTitle>Descrição</ModalFieldTitle>
                <ModalOport>{card.desc}</ModalOport>
              </ModalField>
            )}
          </ModalBox>
        </ModalContainer>
      </ModalDimWrapper>

      <ModalDim onClick={hideModal} show={show !== null}></ModalDim>
    </>
  );
}
