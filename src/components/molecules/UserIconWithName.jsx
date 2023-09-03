import styled from 'styled-components';

export const UserIconWithName = ({img, name}) => {
  return (
    <SContainer>
      <SImg src={img} alt={name}/>
      <SName>{name}</SName>
    </SContainer>
  );
}

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  object-position: top center;
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;