

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuLinkOne: document.querySelector('[data-link-1-close]'),
    closeMenuLinkTwo: document.querySelector('[data-link-2-close]'),
    closeMenuLinkThree: document.querySelector('[data-link-3-close]'),
    closeMenuLinkFour: document.querySelector('[data-link-4-close]'),
    closeMenuLinkFive: document.querySelector('[data-link-5-close]'),
    closeMenuLinkSix: document.querySelector('[data-link-6-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuLinkOne.addEventListener('click', toggleModal);
  refs.closeMenuLinkTwo.addEventListener('click', toggleModal);
  refs.closeMenuLinkThree.addEventListener('click', toggleModal);
  refs.closeMenuLinkFour.addEventListener('click', toggleModal);
  refs.closeMenuLinkFive.addEventListener('click', toggleModal);
  refs.closeMenuLinkSix.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();