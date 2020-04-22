const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchApiInfo = () => fetch(ENDPOINT).then(response => response.json());

export { fetchApiInfo };