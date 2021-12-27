import type { NextPage } from "next";
import { FuturamaContainer } from "../../components";

const CharacterPage: NextPage = () => {
  const category = 'character';

  return (
    <FuturamaContainer 
      category={category}
    />
  );
}

export default CharacterPage;