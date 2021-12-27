import styled from '@emotion/styled';
import Listnk from 'next/Link';
import React from 'react';

interface ROUTE {
  ID: number,
  PATH: string,
  LABEL: string
  SUBS?: Array<ROUTE>
}

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <h2>Exploring about FUTURAMA!</h2>
      </Header>
      <Navigation>
        <ListContainer>
          <List>
            <Listnk href='/futurama/info'>
              <a>INFO</a>
            </Listnk>
          </List>
          <List>
            <Listnk href='/futurama/character'>
              <a>CHARACTERS</a>
            </Listnk>
          </List>
          <List>
            <Listnk href='/futurama/cast'>
              <a>CAST</a>
            </Listnk>
          </List>
          <List>
            <Listnk href='/futurama/episodes'>
              <a>EPISODES</a>
            </Listnk>
          </List>
          <List>
            <Listnk href='/futurama/questions'>
              <a>QUESTIONS</a>
            </Listnk>
          </List>
          <List>
            <Listnk href='/futurama/inventory'>
              <a>INVENTORY</a>
            </Listnk>
          </List>
        </ListContainer>
      </Navigation>
      <MainContainer>
        {children}
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 0;
  grid-template-columns: 1fr 4fr;
`
const Header = styled.header`
  grid-column: 1/3;
`
const Navigation = styled.nav`
  height: 100%;
  width: 20vw;
  min-width: 200px;
  background-color: orange;
`;

const ListContainer = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1em;
`
const List = styled.li`
  List-style: none;
  font-size: 1.5em;
  color: white;
  cursor: pointer;

  :hover{
    background-color: crimson;
  }
`
const MainContainer = styled.main`
  padding-left: 1.5em;
`