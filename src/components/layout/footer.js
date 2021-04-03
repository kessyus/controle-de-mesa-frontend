import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <SFooter>
      <p>&copy; Todos os direitos reservados.</p>
    </SFooter>
  );
};

export default Footer;

const SFooter = styled.footer`
  border-top: 2px solid #2b2e4a;
  text-align: center;
  padding-top: 10px;
  color: white;
  background-color: black;
`;
