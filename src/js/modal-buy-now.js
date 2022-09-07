(() => {
  const buy = {
    openModalBtn: document.querySelector("[data-modal-open-buy-now]"),
    closeModalBtn: document.querySelector("[data-modal-close-buy-now]"),
    modal: document.querySelector("[data-modal-buy-now]"),
  };

  buy.openModalBtn.addEventListener("click", toggleModal);
  buy.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    buy.modal.classList.toggle("is-hidden-buy-now");
  }
})();


// (() => {
//     const refs = {
//     openModalBtn: document.querySelectorAll("click-buy-now"),
//     closeModalBtn: document.querySelector("[data-modal-close-buy-now]"),
//     modal: document.querySelector("[data-modal-buy-now]"),
//     body: document.querySelector('body'),
//     };
//     refs.openModalBtn.forEach(item => {
//         item.addEventListener('click', toggleModal);
//     });
//     refs.closeModalBtn.addEventListener('click', toggleModal);
//     function toggleModal() {
//         refs.modal.classList.toggle('is-hidden-buy-now');
//     }
// })();