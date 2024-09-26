export const cardMarkupImg = function (el) {
    return `
    <li class="favor-ingred__card-item" ${el._id}>
      <div class="photo-card">
        <img class="img-card" src="${el.drinkThumb}" alt="${el.drink}" loading="lazy" width="300" height="250" />
        <div class="info">
          <p class="info-item">
            ${el.drink}
          </p>
          <p class="info-item">
            ${el.description}
          </p>
        </div>
      </div>
    </li>
  `;
};
