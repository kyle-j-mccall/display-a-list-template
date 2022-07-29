export function renderMovie(movie) {
    const pTag = document.createElement('p');
    pTag.textContent = movie;
    pTag.classList.add('movies');
    return pTag;
}