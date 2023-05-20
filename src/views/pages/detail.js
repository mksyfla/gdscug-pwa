import AnimalsAPISource from "../../scripts/data/animals-api-source";
import { createAnimalDetailTemplate } from "../templates/template-creator";
import UrlParser from "../../scripts/routes/url-parser";

const Detail = {
  async render() {
    return `
      <div id="animal" class="animal"></div>
    `
  },

  async afterRender() {
    // Function akan dipanggil setelah rendering
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const animal = await AnimalsAPISource.detailAnimal(url.id);

    const animalContainer = document.querySelector('#animal');
    animalContainer.innerHTML += createAnimalDetailTemplate(animal);
  }
}

export default Detail;