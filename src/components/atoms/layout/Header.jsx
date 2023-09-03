import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  )
}

const SHeader = styled.header`
  background-color: #000;
  text-align: center;
  padding: 16px 0;
`;

const SLink = styled(Link)`
  color:#fff;
  margin: 0 8px;
`;