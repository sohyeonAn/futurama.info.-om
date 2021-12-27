import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number,
  PATH: string,
  LABEL: string,
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <ListContainer>
        {
          ROUTES.map((route: ROUTE) => {
            return (
              <List key={`${route.LABEL}-${route.ID}`}>
                <Link href={route.PATH}>
                  <a>{route.LABEL.toUpperCase()}</a>
                </Link>
              </List>
            );
          })
        }
      </ListContainer>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  grid-column: 1/2;
  min-width: 200px;
  min-height: 85vh;
  background-color: #b01317;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`
const List = styled.li`
  List-style: none;
  font-size: 1.3em;
  padding: 1em;
  color: white;

  cursor: pointer;

  :hover{
    background-color: #000;
  }

  a {
    display: block;
  }
`