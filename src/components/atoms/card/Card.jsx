import styled from 'styled-components';

export const Card = ({children}) => {
  return (
    <SCard>{children}</SCard>
  );
}

const SCard = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 10px 0px;
  padding: 16px;
  border-radius: 4px;
`;