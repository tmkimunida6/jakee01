import styled from 'styled-components';

import { SBaseButton } from './BaseButton';

export const SecondaryButton = ({children}) => {
  return (
    <SButton>{children}</SButton>
  );
}

const SButton = styled(SBaseButton)`
  background-color: blue;
  &:hover {
    background-color: aqua
  }
`;