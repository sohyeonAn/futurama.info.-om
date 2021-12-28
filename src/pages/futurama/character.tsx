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

  function randomNum(max: number) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div>
      <Title>{category.toUpperCase()}</Title>
      <ContentContainer>
        {data.map((character: Character) => {
          return (
            <Card key={`${category}-${character.id}`}>
              <h2>{character.name.first} {character.name.middle} {character.name.last}</h2>
              <ImageBox>
                <img src={character.images.main} alt="character image" />
                <p className="saying">{
                  character.sayings[randomNum(character.sayings.length)]
                }</p>
              </ImageBox>
              <DetailBox>
                <p>age: {character.age}</p>
                <p>gender: {character.gender}</p>
                <p>species: {character.species}</p>
                <p>{character.homePlanet ? `homePlanet: ${character.homePlanet}` : ''}</p>
                <p>{character.occupation ? `occupation: ${character.occupation}` : ''}</p>
              </DetailBox>
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
  z-index: 30;
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

  :hover > div > img + p.saying {
    display: block;
    position: absolute;
    padding: 1em;
    width: 100%;
    bottom: 0;
    left: 0;
    display: block;
    background-color: #003a4b;
    color:white;
    z-index: 10;
  }
`

const ImageBox = styled.div`
  position: relative;

  img {
    min-height: 13em;
    max-height: 20em;
    z-index: 10;
  }

  p.saying {
    display: none;
  }
`

const DetailBox = styled.div`
  display: block;
  /* background-color: pink; */
  margin-top: 1.5em;
  padding: 2em;

  p {
    margin: 0;
    text-align: cneter;
    line-height: 1.5em;
  }
`