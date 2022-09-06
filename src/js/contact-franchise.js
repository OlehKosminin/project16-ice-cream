(() => {
    const refs = {
    openModalBtn: document.querySelectorAll(".data-modal-franchise-open"),
    closeModalBtn: document.querySelector("[data-modal-franchise-close]"),
    modal: document.querySelector("[data-modal-franchise]"),
    body: document.querySelector('body'),
    };
    refs.openModalBtn.forEach(item => {
        item.addEventListener('click', toggleModal);
    });
    
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        // refs.body.classList.toggle('no-scroll');
    }
})();