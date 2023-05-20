import CONFIG from './config';

const API_ENDPOINT = {
  LIST_ANIMALS: `${CONFIG.BASE_URL}/animals`,
  DETAILS_ANIMALS: (id) => `${CONFIG.BASE_URL}/animal?id=${id}`
}

export default API_ENDPOINT;
