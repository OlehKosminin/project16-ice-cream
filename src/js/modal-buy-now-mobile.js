(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-modal-open-buy-now-mobile]"),
    closeModalBtn: document.querySelector("[data-modal-close-buy-now-mobile]"),
    modal: document.querySelector("[data-modal-buy-now-mobile]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
    refs.modal.classList.toggle("is-hidden-buy-now");
    }
})();