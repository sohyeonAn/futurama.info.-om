import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Error, Loading } from "../../components/index";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Episodes } from "../../types/Futurama";

const EpisodesPage: NextPage = () => {
  const category = 'episodes';
  const { data, error } = useFuturamaData(category);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <Title>{category.toUpperCase()}</Title>
      <ContentContainer>
      {data.map((episode: Episodes) => {
        return (
          <Card key={`${category}-${data.id}`}>
            <p>Episode {episode.number}</p>
            <h3>{episode.title}</h3>
            <p>{episode.desc}</p>
          </Card>
        );
      })}
      </ContentContainer>
    </div>
  );
}

export default EpisodesPage;

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

  h2 {
    text-decoration: underline;
  }
`