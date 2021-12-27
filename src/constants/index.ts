export const FUTURAMA_API_ENDPOINT = 'https://api.sampleapis.com/futurama/';

export const MEDIA_QUERY_END_POINT = {
  MOBILE: '640px',
  TABLET: '1280px',
  DESKTOP: '1920px',
};

const ROUTE = '/futurama';

export const ROUTES = [
  {
    ID: 1,
    PATH: ROUTE + '/info',
    LABEL: 'info',
  },
  {
    ID: 1,
    PATH: ROUTE + '/character',
    LABEL: 'character',
  },
  {
    ID: 2,
    PATH: ROUTE + '/cast',
    LABEL: 'cast',
  },
  {
    ID: 3,
    PATH: ROUTE + '/episodes',
    LABEL: 'episodes',
  },
  {
    ID: 4,
    PATH: ROUTE + '/inventory',
    LABEL: 'inventory',
  },
  {
    ID: 5,
    PATH: ROUTE + '/questions',
    LABEL: 'questions',
  }
];