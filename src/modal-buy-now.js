(() => {
    const refs = {
    openModalBtn: document.querySelectorAll(".click"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector('body'),
    };
    refs.openModalBtn.forEach(item => {
        item.addEventListener('click', toggleModal);
    });
    
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
})();