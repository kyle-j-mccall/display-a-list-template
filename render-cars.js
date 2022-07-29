export function renderCars(car) {
    const carContainer = document.createElement('div');
    const makeEl = document.createElement('h3');
    const modelEl = document.createElement('h4');
    const yearEl = document.createElement('p');
    const featuresEl = document.createElement('div');
    const stereoEl = document.createElement('p');
    const windowsEl = document.createElement('p');
    const navigationEl = document.createElement('p');
    carContainer.classList.add('cars');
    makeEl.textContent = car.make;
    modelEl.textContent = car.model;
    yearEl.textContent = car.year;
    stereoEl.textContent = car.features.stereo;
    windowsEl.textContent = car.features.windows;
    navigationEl.textContent = car.features.navigation;

    

    featuresEl.append(stereoEl, windowsEl, navigationEl);
    carContainer.append(makeEl, modelEl, yearEl, featuresEl);
    
    return carContainer;
}

