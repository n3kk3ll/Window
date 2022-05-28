const modals = () => {

  function handleModal(triggerSelector, modalSelector, closeBtn) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = modal.querySelector(closeBtn);

    function openModal() {
      modal.style.display = `block`;
      document.body.classList.add(`modal-open`);
    }

    function closeModal() {
      modal.style.display = `none`;
      document.body.classList.remove(`modal-open`);
    }

    trigger.forEach(item => {
      item.addEventListener(`click`, e => {
        if (e.target && e.target.attributes.href) {
          e.preventDefault();
        }
        openModal();
      });
    });

    close.addEventListener(`click`, closeModal);

    modal.addEventListener(`click`, e => {
      if (e.target && e.target === modal) {
        closeModal();
      }
    });

  }

  function showModalAfterTime(modal, time) {
    setTimeout(() => {
      document.querySelector(modal).style.display = `block`;
      document.body.classList.add(`modal-open`);
    }, time);
  }
  
  showModalAfterTime(`.popup`, 60e3);

  handleModal(`.popup_engineer_btn`, `.popup_engineer`, `.popup_close`);
  handleModal(`.phone_link`, `.popup`, `.popup_close`);

};

export default modals;