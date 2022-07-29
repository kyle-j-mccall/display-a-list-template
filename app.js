
import { movies } from './movies-data.js';
import { books } from './books-data.js';
import { cars } from './cars-data.js';
import { animals } from './animals-data.js';



import { renderMovie } from './render-movies.js';

const movieList = document.getElementById('movie-list');

for (let movie of movies) {
  const renderedMovie = renderMovie(movie);
  movieList.append(renderedMovie);
}

import { renderBook } from './render-books.js';

const bookList = document.getElementById('book-list');

for (let book of books) {
  const renderedBook = renderBook(book);
  bookList.append(renderedBook);
}

import { renderCars } from './render-cars.js';

const carList = document.getElementById('car-list');

for (let car of cars) {
  const renderedCar = renderCars(car);
  carList.append(renderedCar);
}

import { renderAnimal } from './render-animal.js';

const animalList = document.getElementById('animal-list');

for (let animal of animals) {
  const renderedAnimal = renderAnimal(animal);
  animalList.append(renderedAnimal);

  
}

