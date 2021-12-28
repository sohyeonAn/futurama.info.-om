import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";
import { Error, Loading } from "../../components/index";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Info } from "../../types/Futurama";

const InfoPage: NextPage = () => {
  const category = 'info';
  const { data, error } = useFuturamaData(category);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <Title>{category.toUpperCase()}</Title>
      <ContentContainer>
        <h3>About Futurama</h3>
      {data.map((info: Info) => {
        return (
          <Card key={`${category}-${info.id}`}>
            <p>{info.synopsis}</p>
            <p>{info.yearsAired}</p>
            {info.creators.map(({name, url})=>{
              return (
                <div key={`${category}-${info.id}-${name}`}>
                  <Link href={url}>
                    <a>{name}</a>
                  </Link>
                </div>
              );
            })}
          </Card>
        );
      })}
      </ContentContainer>
    </div>
  );
}

export default InfoPage;

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
`

const Card = styled.div`
  padding: .5em;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  a {
    text-decoration: underline;
  }
`