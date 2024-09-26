import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basiclightbox.min.css';
import { createModalContent } from './modalContentMarkup';
import { addToFavorites } from './addToFavorites';
import { removeFromFavorite } from './removeFromFavorite';

export function openModal(isRemoveFromFavorite) {
  const modalData = getModalData(this);
  const modalButtonText = isRemoveFromFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';
  const modalContent = createModalContent(modalData, modalButtonText);

  const modal = basicLightbox.create(modalContent, {
    handler: null,
    onShow(instance) {
      this.handler = closeModal.bind(instance);
      document.addEventListener('keydown', this.handler);
    },
    onClose() {
      document.removeEventListener('keydown', this.handler);
    },
  });

  modal.show();

  const modalElement = modal.element();
  const favoriteButton = modalElement.querySelector('.add-favorite');
  const backButton = modalElement.querySelector('.back-button');

  favoriteButton.addEventListener('click', () =>
    handleFavoriteClick(isRemoveFromFavorite, modalData)
  );

  backButton.addEventListener('click', () => modal.close());
}

function getModalData(element) {
  return { ...element.dataset, abv: element.dataset.alcoholVolume };
}

function handleFavoriteClick(isRemoveFromFavorite, modalData) {
  if (isRemoveFromFavorite) {
    removeFromFavorite(modalData.id);
  } else {
    addToFavorites(modalData);
  }
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}
