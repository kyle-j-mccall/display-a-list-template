export function renderAnimal(animal) {
    const animalContainer = document.createElement('div');
    const typeEl = document.createElement('h3');
    const colorEl = document.createElement('h4');
    const activitiesContainer = document.createElement('ul');
    animalContainer.classList.add('animal-container');
    typeEl.textContent = animal.type;
    colorEl.textContent = animal.color;

    for (let activities of animal.activities) {
        const activitiesEl = document.createElement('li');
        activitiesEl.classList.add('animal-activities');
        activitiesEl.textContent = activities;
        activitiesContainer.append(activitiesEl);
    }


    animalContainer.append(typeEl, colorEl, activitiesContainer);

    return animalContainer;

    
}