(() => {
  const made = {
    openModalBtn: document.querySelector("[data-modal-made-open]"),
    closeModalBtn: document.querySelector("[data-modal-made-close]"),
    modal: document.querySelector("[data-modal-made]"),
  };

  made.openModalBtn.addEventListener("click", toggleModal);
  made.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    made.modal.classList.toggle("is-hiden-made");
  }
})();