import styled from 'styled-components';

import { SBaseButton } from './BaseButton';

export const PrimaryButton = ({children}) => {
  return (
    <SButton>{children}</SButton>
  );
}

const SButton = styled(SBaseButton)`
  background-color: red;
  &:hover {
    background-color: pink
  }
`;