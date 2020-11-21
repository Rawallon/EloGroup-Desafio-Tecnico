import styled from 'styled-components';
export const ContentForm = styled.form`
  padding: 30px;
  height: 100%;
  width: 100%;
  border: 1px solid black;
`;

export const ButtonForm = styled.button`
  background-color: #ffffff;
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
export const FormField = styled.div`
  position: relative;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 23px;
  left: 14px;
  display: block;
  font-size: 1.25rem;
  border-radius: 4px;
  background-color: #fff;
  color: #737373;
  transition: all 0.2s;
`;

export const InputLabelNormal = styled(InputLabel)`
  top: 2px;
`;

export const InputField = styled.input`
  margin: 15px 0;
  border: 1px solid #bfbfbf;
  width: 100%;
  border-radius: 0.3rem;
  padding: 12px 20px;
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
    top: 2px;
  }
`;
