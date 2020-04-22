const ENDPOINT = 'https://';

const fetchApiInfo = () => fetch(ENDPOINT).then(response => response.json());

export { fetchApiInfo };