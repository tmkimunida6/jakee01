import styled from 'styled-components';

import { Card } from '../../atoms/card/Card';
import { UserIconWithName } from '../../molecules/UserIconWithName';

export const UserCard = ({ user }) => {
  return (
    <Card>
      <UserIconWithName img={user.img} name={user.name}/>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
}

const SDl = styled.dl`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  dt {
    width: calc(20% - 8px);
    min-width: 50px;
    padding-right: 8px;
    padding-top: 8px;
    flex-shrink: 0;
    font-weight: bold;
  }
  dd {
    width: 80%;
    margin: 0;
    padding-top: 8px;
    word-break: break-all;
  }
`;