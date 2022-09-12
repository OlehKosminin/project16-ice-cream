(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-product-one-open]"),
    closeModalBtn: document.querySelector("[data-modal-product-one-close]"),
    modal: document.querySelector("[data-modal-product-one]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-products");
  }
})()