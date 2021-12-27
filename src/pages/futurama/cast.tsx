import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Error, Loading } from "../../components/index";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import * as FuturamaType from "../../types/Futurama";

const CastPage: NextPage = () => {
  const category = 'cast';
  const { data, error } = useFuturamaData(category);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <Title>&lt; {category} &gt;</Title>
      {data.map((cast: FuturamaType.Cast) => {
        return (
          <div key={`${category}-${data.id}`}>
            <h2>{cast.name}</h2>
            <p>{cast.born}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CastPage;

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  background-color: tomato;
  color: white;
  margin: 0;
  position: sticky;
  top: 0;
`