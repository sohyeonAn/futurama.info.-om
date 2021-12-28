import styled from "@emotion/styled";
import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { Error, Loading } from "../../components/index";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Episodes } from "../../types/Futurama";

const EpisodesPage: NextPage = () => {
  const category = 'episodes';
  const { data, error } = useFuturamaData(category);
  const [selected, setSelected] = useState("0");
  let seasons: Array<number> = [];

  if (error) return <Error />
  if (!data) return <Loading />

  // 에피소드 번호로 소트
  data.sort((a: Episodes, b: Episodes) => {
    const num1 = parseInt(a.number.split('-')[0].trim());
    const num2 = parseInt(b.number.split('-')[0].trim());

    return num1 - num2;
  })

  // 각 시즌의 시작번호를 seasons에 저장.
  data.forEach((epi: Episodes, index: number) => {
    const fullNum = epi.number.split('-')[0].trim();
    const num = epi.number.split('-')[1].trim();

    if(num === '1'){
      seasons.push(parseInt(fullNum));
    }
  });

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <Title>{category.toUpperCase()}</Title>
      <SelectBox onChange={handleChangeSelect} value={selected}>
        <option value={'0'}>All</option>
        {seasons.map((firstIdx: number, index: number) => {
          return (
            <option key={`episode-season-${index+1}`} value={index+1}>season {index+1}</option>
          );
        })}
      </SelectBox>
      <ContentContainer>
      {
        data.filter((epi: Episodes) => {
          const num = parseInt(epi.number.split('-')[0].trim());
          if(selected === '0'){
            return true;
          }else if(parseInt(selected) === seasons.length){
            return num >= seasons[parseInt(selected)-1]
          }else{
            return num < seasons[parseInt(selected)] && num >= seasons[parseInt(selected)-1]
          }
        }).map((episode: Episodes) => {
          return (
            <Card key={`${category}-${episode.id}`}>
              <p>Episode {episode.number}</p>
              <h3>{episode.title}</h3>
              <p>{episode.desc}</p>
            </Card>
          );
        })
      }
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
  padding: 1em;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  h2 {
    text-decoration: underline;
  }
`

const SelectBox = styled.select`
  margin: 2em 2em 0;
  width: 15em;
  height: 3em;
  font-size: 1em;
  border-radius: 3em;
  text-align: center;
  cursor: pointer;
`