import AnimalsAPISource from "../../scripts/data/animals-api-source";
import { createAnimalItemTemplate } from "../templates/template-creator";

const Animal = {
  async render() {
    return `
      <div class="content">
        <h2 class="content_heading">Animal Page</h2>
        <div id="animals" class="animals">

        </div>
      </div>
    `
  },

  async afterRender() {
    // Function akan dipanggil setelah rendering
    const animals = await AnimalsAPISource.listAnimals();

    // console.log(animals);
    const animalContainer = document.querySelector('#animals');
    animals.forEach(animal => {
      animalContainer.innerHTML += createAnimalItemTemplate(animal);
    });
  }
}

export default Animal;