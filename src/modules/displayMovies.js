const cardsContainer = document.querySelector('.cards-display-section');
const displayMovies = async (shows) => {
  cardsContainer.innerHTML = '';
  for (let i = 0; i < 20 && i < shows.length; i += 1) {
    const show = shows[i];
    cardsContainer.innerHTML += `
        <li id="movie-${show.id}" class="movie-item">
          <img src=${show.image.medium} alt="movie-image" class="movie-image" />
          <div class="likes">
            <h4 class="movie-title">${show.name}</h4>
            <div class="heart">
              <i class="fa-regular fa-heart" id=${show.id}></i>
              <p id="${show.id}"> <span class="like-numbers"></span></p>
            </div>
          </div>
          <div class="description">
            <button class="btn" id="${show.id}">Comments</button>
          </div>
        </li>
      `;
  }
};
export default displayMovies;