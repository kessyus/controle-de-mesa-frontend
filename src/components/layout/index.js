import React from 'react';
import Header from './header';
import styled from 'styled-components';

const Layout = (props) => {
  document.title = props.page;
  return (
    <>
      <Header title={props.page} />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  flex: 1;
  background-color: rgb(23, 23, 23);
`;
