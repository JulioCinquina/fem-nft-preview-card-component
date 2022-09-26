'use strict';

const nftImageContainer = document.querySelector('.nft__img');
const nftModal = document.querySelector('.nft__dialog');

nftImageContainer.addEventListener('click', () => {
  nftModal.showModal();
});

nftModal.addEventListener('click', () => {
  nftModal.close();
});
