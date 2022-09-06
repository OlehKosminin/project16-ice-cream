(() => {
    const refs = {
    openModalBtn: document.querySelectorAll(".data-modal-Locations-open"),
    closeModalBtn: document.querySelector("[data-modal-Locations-close]"),
    modal: document.querySelector("[data-modal-Locations]"),
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

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-Locations-open]"),
//     closeModalBtn: document.querySelector("[data-modal-Locations-close]"),
//     modal: document.querySelector("[data-modal-Locations]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();