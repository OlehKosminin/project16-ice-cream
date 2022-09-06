(() => {
    const refs = {
    openModalBtn: document.querySelectorAll(".click-buy-now"),
    closeModalBtn: document.querySelector("[data-modal-close-buy-now]"),
    modal: document.querySelector("[data-modal-buy-now]"),
    body: document.querySelector('body'),
    };
    refs.openModalBtn.forEach(item => {
        item.addEventListener('click', toggleModal);
    });
    
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden-buy-now');
        // refs.body.classList.toggle('no-scroll');
    }
})();