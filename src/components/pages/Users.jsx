import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput' 
import { UserCard } from '../organism/user/UserCard'

export const Users = () => {
  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      name: `キムチェウォン-${val}`,
      img: 'https://contents.perfect.ne.jp/media/IIaXXv/2rsv74lsn9.jpg',
      email: 'kim.chaewon@gmail.com',
      tel: '000-0000-0000',
      company: {
        name: 'ルセラフィムカンパニー'
      },
      website: 'https://www.le-sserafim.jp/'
    }
  });

  return (
    <SContainer>
      <h1>Usersページです！</h1>
      <SearchInput />
      <SCardArea>
        {users.map(user => {
          return <UserCard key={user.id} user={user}/>
        })}
      </SCardArea>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SCardArea = styled.div`
  padding-top: 40px;
  margin: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`;