import { StringDecoder } from "string_decoder";

export interface Info {
  synopsis: string,
  yearsAired: string,
  creators: Array<{
    name: string,
    url: string
  }>,
  id: number
}
export interface Cast {
  name: string,
  born: string,
  died: string,
  bio: {
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

export interface Episodes {
  number: string,
  title: string,
  writers: string,
  originalAirDate: string,
  desc: string,
  id: number
}

export interface Questions {
  id: number,
  question: string,
  possibleAnswers: Array<String>,
  correctAnswer: string
}

export interface Inventory {
  title: string,
  category: string,
  description: string,
  slogan: string,
  price: number,
  stock: number,
  id: number
}