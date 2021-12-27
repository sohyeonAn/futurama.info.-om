import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Error, Loading } from "../../components/index";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Character } from "../../types/Futurama";

const CharacterPage: NextPage = () => {
  const category = 'characters';

  const { data, error } = useFuturamaData(category);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <Title>{category.toUpperCase()}</Title>
      <ContentContainer>
        {data.map((character: Character) => {
          return (
            <Card key={`${category}-${character.id}`}>
              <h2>{character.name.first} {character.name.middle} {character.name.last}</h2>
              <img src={character.images.main} alt="character image" />
              <p>gender: {character.gender}</p>
              <p>species: {character.species}</p>
              <p>homePlanet: {character.homePlanet}</p>
              <p>occupation: {character.occupation}</p>
              <p>age: {character.age}</p>
            </Card>
          );
        })}
      </ContentContainer>
    </div>
  );
}

export default CharacterPage;

const Title = styled.h2`
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0.3em;
  font-size: 1.8em;
  text-align: left;
  background-color: #b01317;
  color: white;
`
const ContentContainer = styled.div`
  padding: 1.5em;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(4, 1fr);
`

const Card = styled.div`
  padding: .5em;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  img {
    max-height: 20em;
  }

  
  p {
    padding: 0 1em 0.3em;
    margin: 0;
    text-align: left;
  }
`