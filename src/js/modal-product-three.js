(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-product-three-open]"),
    closeModalBtn: document.querySelector("[data-modal-product-three-close]"),
    modal: document.querySelector("[data-modal-product-three]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-products");
  }
})()