import noImg from '../images/rafiki_not.png';

export function noResultFavorCocktails(container) {
  container.innerHTML = `
  <div class="no_result_container change-theme">
   <img src="${noImg}" class="no_result_img" alt="no cocktails" />
   <p class="no_result_text">
    You haven't added any<br /><span class="no_result_fc"
      >favorite cocktails</span
    >
    yet
   </p>
  </div>`;
}
