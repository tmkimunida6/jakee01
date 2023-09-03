import styled from 'styled-components';

export const Footer = () => {
  return (
    <SFooter>
      LE SSERAFIM Copyright&copy;SOURCE MUSIC Co.,Ltd.
      <br />
      All Rights Reserved
    </SFooter>
  )
}

const SFooter = styled.footer`
  background-color: #000;
  padding: 16px 0;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;