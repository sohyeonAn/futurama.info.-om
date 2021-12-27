import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";

const FuturamaPage: NextPage = () => {
  return (
    <div>
      <Heading>You can find everything about Futurama here!</Heading>
      <ImageEl
        src='/images/introduce_futurama.png'
        alt="futurama logo" 
      />
    </div>
  );
}

export default FuturamaPage;

const Heading = styled.h1`
  font-size: 1.8em;
  text-align: center;
`
const ImageEl = styled.img`
  display: block;
  width: 800px;
  height: 500px;
  margin: 0 auto;
`