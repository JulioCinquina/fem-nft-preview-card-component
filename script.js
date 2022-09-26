'use strict';

const nftImageContainer = document.querySelector('.nft__img');
const nftModal = document.querySelector('.nft__dialog');

nftImageContainer.addEventListener('click', () => {
  nftModal.showModal();
  nftImageContainer.setAttribute('aria-expanded', 'true');

  // Event listener for closing modal once it's open
  nftModal.addEventListener(
    'click',
    () => {
      nftModal.close();
      nftImageContainer.setAttribute('aria-expanded', 'false');
    },
    { once: true }
  );
});
