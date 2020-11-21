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
  ModalContent,
  ModalBttn,
  ModalTitleInput,
  ModalInput,
  ModalDescInput,
} from '../../styles/ModalStyle';
import formatDate from '../../../utils/formatDate';

export function EditModal({
  show,
  hideModal,
  card,
  onChange,
  formData,
  saveChanges,
  setFormData,
  onOportChange,
}) {
  const { name, tel, email, oport, desc } = formData;

  return (
    <>
      <ModalDimWrapper show={show !== null}>
        <ModalContainer>
          <ModalBox show={show !== null}>
            <ModalField>
              <ModalTitleContainer>
                <ModalTitleHeader>
                  <ModalTitleInput
                    value={name}
                    onChange={(e) => onChange(e)}
                    name="name"
                  />
                  <ModalBttn
                    onClick={(e) => {
                      saveChanges();
                    }}>
                    Salvar
                  </ModalBttn>
                </ModalTitleHeader>
                <ModalSub>Criado em {formatDate(card.createdat)}</ModalSub>
              </ModalTitleContainer>
            </ModalField>
            <ModalField>
              <ModalFieldTitle>Contato</ModalFieldTitle>
              <ModalContent>
                Email:
                <ModalInput
                  value={email}
                  onChange={(e) => onChange(e)}
                  name="email"
                />
              </ModalContent>
              <ModalContent>
                Tel.:
                <ModalInput
                  value={tel}
                  onChange={(e) => onChange(e)}
                  name="email"
                />
              </ModalContent>
            </ModalField>
            <ModalField>
              <ModalTitleHeader>
                <ModalFieldTitle>Oportunidades</ModalFieldTitle>
                <ModalBttn
                  onClick={(e) => {
                    setFormData({ ...formData, oport: [...oport, []] });
                  }}>
                  Adicionar
                </ModalBttn>
              </ModalTitleHeader>
              <ModalContent>
                {formData.oport.map((item, index) => (
                  <ModalInput
                    bg={'on'}
                    key={index}
                    value={item}
                    onChange={(e) => onOportChange(e, index)}
                    name="oport"
                  />
                ))}
              </ModalContent>
            </ModalField>
            <ModalField>
              <ModalFieldTitle>Descrição</ModalFieldTitle>
              <ModalOport>
                <ModalDescInput
                  value={desc}
                  onChange={(e) => onChange(e)}
                  name="desc"
                />
              </ModalOport>
            </ModalField>
          </ModalBox>
        </ModalContainer>
      </ModalDimWrapper>

      <ModalDim onClick={hideModal} show={show !== null}></ModalDim>
    </>
  );
}
