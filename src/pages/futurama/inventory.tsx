import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Error, Loading } from "../../components/index";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Inventory } from "../../types/Futurama";

const InventoryPage: NextPage = () => {
  const category = 'inventory';
  const { data, error } = useFuturamaData(category);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <Title>{category.toUpperCase()}</Title>
      <ContentContainer>
        {data.map((inven: Inventory) => {
          return (
            <Card key={`${category}-${inven.id}`}>
              <h3>{inven.title}</h3>
              <p>{inven.description}</p>
              <p>{inven.slogan ? `slogan: ${inven.slogan}` : ''}</p>
              <p>price: {inven.price}</p>
              <p>stock: {inven.stock}</p>
              <p>category: {inven.category}</p>
            </Card>
          );
        })}
      </ContentContainer>
    </div>
  );
}

export default InventoryPage;

const Title = styled.h2`
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0.3em;
  font-size: 1.8em;
  text-align: left;
  background-color: #b01317;
  color: white;
  z-index: 10;
  `
const ContentContainer = styled.div`
  padding: 1.5em;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, 1fr);
`

const Card = styled.div`
  position: relative;
  display: block;
  padding: 0 .5em;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  margin: 0;
`