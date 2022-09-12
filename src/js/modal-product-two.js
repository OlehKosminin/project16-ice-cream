(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-product-two-open]"),
    closeModalBtn: document.querySelector("[data-modal-product-two-close]"),
    modal: document.querySelector("[data-modal-product-two]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-products");
  }
})()