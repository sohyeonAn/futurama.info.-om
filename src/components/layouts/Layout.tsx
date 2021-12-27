import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { Navigation } from '.';
import Image from "next/image";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <h2>
          <Link href="/futurama">
            <a>FUTURAMA</a>
          </Link>
        </h2>
      </Header>
      <Navigation />
      <main>
        {children}
      </main>
    </Container>
  );
}

const Header = styled.header`
  height: 15vh;
  grid-column: 1/3;
  text-align: center;
  font-size: 1.5em;
  color: #fff;
  background-color: #000;
  padding: 0;
  margin: 0;
  
  h2 {
    padding: 0;
    margin: 0;
  }

  h2 > a {
    position: relative;
    line-height: 15vh;
  }

  h2 > a::before{
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -1.3em;
    transform: translateY(-50%);
    background: url("/images/title.png") no-repeat;
    background-size: 1em 2em;
    width: 1em;
    height: 2em;
  }
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`