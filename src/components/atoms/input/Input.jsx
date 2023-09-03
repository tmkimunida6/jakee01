import styled from 'styled-components';

export const Input = ({placeholder =""}) => {
  return (
    <SInput type="text" placeholder={placeholder} />
  );
}

const SInput = styled.input`
  padding: 8px 8px;
  border-radius: 9999px;
  outline: none;
  border: none;
`;