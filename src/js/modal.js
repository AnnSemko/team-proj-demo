(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    openModalBtnMobile: document.querySelector("[data-modal-open-mobile]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnMobile.addEventListener("click", toggleModal);

  function toggleModal() {
        document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle("is-hidden");
  }
})();