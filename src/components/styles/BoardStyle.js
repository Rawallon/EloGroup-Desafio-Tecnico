import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const LeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 15px;
`;

export const LeadButton = styled.button`
  background-color: #fff;
  border: 1px solid #14222b;
  color: #14222b;
  padding: 14px 20px;
  margin: 8px 0;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    background-color: #14222b;
    color: #fff;
  }
`;

export const OportunidadeButton = styled(LeadButton)`
  background-color: #14222b;
  color: #fff;
  border: 1px solid #14222b;
  padding: 14px 20px;
  margin: 8px 0;
  cursor: pointer;
  width: 20%;
  transition: all 0.2s;

  &:hover {
    background-color: #fff;
    color: #14222b;
  }
`;
export const LeadTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 15px;
`;

export const CardTitle = styled(LeadTitle)`
  margin: 10px;
  text-align: left;
  font-size: 1.25rem;
  padding-bottom: 0px;
`;

export const CardContainer = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-columns: 100px;
  gap: 15px;

  @media (max-width: 476px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddLeadContainer = styled(CardContainer)`
  grid-template-columns: 3fr 1fr;
`;

export const CardColumn = styled.div`
  border: 1px solid #000;
  background: #ebecf0;
  padding: 5px;
  height: 100%;
`;
export const CardBody = styled.div`
  border-radius: 5px;
  background: #fff;
  padding: 7px;
  margin: 10px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  &:hover {
    background-color: #f4f5f7;
    border-bottom-color: rgba(9, 30, 66, 0.25);
  }
`;

export const LeadInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const AddContainer = styled(CardContainer)`
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 476px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const FormField = styled.div`
  position: relative;
`;
export const InputLabel = styled.label`
  position: absolute;
  top: 2px;
  left: 14px;
  display: block;
  font-size: 1.25rem;
  border-radius: 4px;
  background-color: #fff;
  color: #bfbfbf;
  transition: all 0.2s;
`;

export const TextareaAdd = styled(TextareaAutosize)`
  margin: 15px 0;
  border: 1px solid #bfbfbf;
  width: 100%;
  border-radius: 0.3rem;
  padding: 10px;
  border-style: solid;
  transition: all 0.2s;
  resize: none;
  &:focus {
    border: 1px solid #091e42;
  }
  &:focus ~ ${InputLabel} {
    color: #091e42;
  }
`;

export const InputAdd = styled.input`
  margin: 15px 0;
  border: 1px solid #bfbfbf;
  width: 100%;
  border-radius: 0.3rem;
  padding: 10px 8px 8px 16px;
  border-style: solid;
  transition: all 0.2s;
  &::first-child {
    margin: 0px 0;
  }
  &:focus {
    border: 1px solid #091e42;
  }

  &:focus ~ ${InputLabel} {
    color: #091e42;
  }
`;

export const AddTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;
export const AddTableHead = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
export const AddTableData = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
