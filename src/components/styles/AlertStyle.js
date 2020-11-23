import styled from 'styled-components';

export const AlertWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 80px;
`;

export const AlertBox = styled.div`
  ${(props) => props.type === 'warning' && 'background-color: #856404;'}
  ${(props) => props.type === 'danger' && 'background-color: #721c24;'}
  ${(props) => props.type === 'success' && 'background-color: #155724;'}
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  border: 1px solid black;
  z-index: 20;
  &:hover {
    filter: brightness(120%);
  }
`;
