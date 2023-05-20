import API_ENDPOINT from "../global/api-endpoint";

class AnimalsAPISource {
  static async listAnimals() {
    const response = await fetch(API_ENDPOINT.LIST_ANIMALS);
    const responseJson = await response.json();
    return responseJson.data;
  }
  
  static async detailAnimal(id) {
    const response = await fetch(API_ENDPOINT.DETAILS_ANIMALS(id));
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default AnimalsAPISource;
