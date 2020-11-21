import styled from 'styled-components';
import { Container } from './GlobalStyle';
import TextareaAutosize from 'react-textarea-autosize';

export const ModalContainer = styled(Container)`
  position: relative;
`;
export const ModalDim = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.show ? 'grid' : 'none')};
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  color: black;
`;

export const ModalDimWrapper = styled(ModalDim)`
  background-color: transparent;
`;
export const ModalBox = styled.div`
  display: ${(props) => (props.show ? 'grid' : 'none')};
  position: absolute;
  left: 20%;
  top: 80px;
  width: 60%;
  background-color: #f4f5f7;
  color: black;
  padding: 16px;
  border-radius: 5px;
  /* grid-template-columns: 2fr 1fr; */
  z-index: 2;
`;

export const ModalTitleContainer = styled.div`
  font-size: 1.25rem;
  background-color: rgba(9, 30, 66, 0.04);
  padding: 10px;
  border-radius: 5px;
`;
export const ModalTitleHeader = styled.div`
  display: flex;
  align-content: space-around;
`;
export const ModalTitleText = styled.p`
  color: #172b4d;
  font-size: 1.25rem;
`;

export const ModalSub = styled.p`
  margin: 5px 0;
  color: #5e6c84;
  font-size: 0.875rem;
`;

export const ModalContent = styled.div`
  color: #172b4d;
  font-size: 1rem;
  margin: 10px;
`;

export const ModalOport = styled(ModalSub)`
  color: #172b4d;
`;

export const ModalField = styled.div`
  margin: 10px 0;
`;

export const ModalFieldTitle = styled(ModalTitleContainer)`
  background-color: transparent;
  padding: 0;
`;

export const ModalBttn = styled.button`
  color: white;
  background-color: #14222b;
  box-shadow: none;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  height: 32px;
  max-width: 300px;
  padding: 6px 12px;
  margin-left: auto;
  display: block;
`;

export const ModalTitleInput = styled.input`
  width: 90%;
  background: transparent;
  border-radius: 3px;
  color: #172b4d;
  font-size: 1.25rem;
  resize: none;
  border: 0;
  padding: 5px;
  &:focus {
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #0079bf;
  }
`;
export const ModalInput = styled(ModalTitleInput)`
  font-size: 1rem;
  margin: 5px 0;
  background-color: ${(props) => (props.bg ? '#fff' : 'transparent')};
  box-shadow: ${(props) => (props.bg ? 'inset 0 0 0 1px #000' : '0')};
`;
export const ModalDescInput = styled(TextareaAutosize)`
  padding: 6px 12px;
  resize: none;
  border: 0;
  background: transparent;
  width: 100%;
  &:focus {
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #0079bf;
  }
`;
