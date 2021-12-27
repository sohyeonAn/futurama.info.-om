import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from '../constants';

interface FuturamaContainerProps {
  dataset: string
}

export const FuturamaContainer = ({ dataset }: FuturamaContainerProps) => {

  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

// const BeerTitle = styled.h1`
//   font-size: 1.5em;
//   line-height: 180%;
// `;

// const BeerCardContainer = styled.main`
//   display: grid;
//   gap: 1em;
//   @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}){
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}){
//     grid-template-columns: repeat(4, 1fr);
//   }
// `;