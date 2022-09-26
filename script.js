'use strict';

const nftImageContainer = document.querySelector('.nft__img');
const nftModal = document.querySelector('.nft__dialog');

nftImageContainer.addEventListener('click', () => {
  nftModal.showModal();
  nftImageContainer.setAttribute('aria-expanded', 'true');
});

nftModal.addEventListener('click', () => {
  nftModal.close();
  nftImageContainer.setAttribute('aria-expanded', 'false');
});
