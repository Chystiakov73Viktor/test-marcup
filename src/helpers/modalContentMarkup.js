import { checkAlco } from './checkAlco';
import { trimText } from './trimText';

export function createModalContent(modalData, buttonText) {
  const modalDataAttr = JSON.stringify(modalData);
  return `
    <li class="modal-content">
      <h2 class="title">${modalData.title}</h2>
      <p class="type">${modalData.type}</p>
      <p class="alcohol">${checkAlco(modalData.alcohol)}</p>
      <p class="description">${trimText(modalData.description, 300)}</p>
      <ul class="type-list">
        <li>Type: ${modalData.type}</li>
        <li>Country of origin: ${modalData.country}</li>
        <li>Alcohol by volume: ${modalData.alcoholVolume}</li>
        <li>Flavour: ${modalData.flavour}</li>
      </ul>
      <div class="modal-button">
        <button class="add-favorite modal-button-action" data-modal-data='${modalDataAttr}'>${buttonText}</button>
        <button class="back-button modal-button-action">Back</button>
      </div>
    </li>
  `;
}


// import { checkAlco } from './checkAlco';
// import { trimText } from './trimText';

// export function createModalContent(modalData, buttonText) {
//   // const modalButtonText = buttonText ? 'Add to favorite' : 'Remove from favorite';
//   return `
//       <li class="modal-content">
//         <h2 class="title">${modalData.title}</h2>
//         <p class="type">${modalData.type}</p>
//         <p class="alcohol">${checkAlco(modalData.alcohol)}</p>
//         <p class="description">${trimText(modalData.description, 300)}</p>
//         <ul class="type-list">
//           <li>Type: ${modalData.type}</li>
//           <li>Country of origin: ${modalData.country}</li>
//           <li>Alcohol by volume: ${modalData.alcoholVolume}</li>
//           <li>Flavour: ${modalData.flavour}</li>
//         </ul>
//         <div class="modal-buttton">
//           <button class="add-favorite modal-buttton-action" data-id="${
//             modalData.id
//           }" 
//             data-title="${modalData.title}"
//             data-alcohol="${modalData.alcohol}"
//             data-description="${modalData.description}"
//             data-type="${modalData.type}"
//             data-country="${modalData.country}"
//             data-alcohol-volume="${modalData.alcoholVolume}"
//             data-flavour="${modalData.flavour}">${buttonText}</button>
//           <button class="back-button modal-buttton-action">Back</button>
//         </div>
//       </li>
//     `;
// }
