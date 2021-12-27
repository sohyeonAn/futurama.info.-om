export interface Cast {
  name: string,
  born: string,
  died: {
    text: string,
    url: string,
  },
  id: number,
}

export interface Character {
  name: {
    first: string,
    middle: string,
    last: string,
  },
  images: {
    "head-shot": string,
    main: string,
  }
  gender: string,
  species: string,
  homePlanet: string,
  occupation: string,
  sayings: Array<string>,
  id: number,
  age: string
}