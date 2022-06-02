import calcScrollWidth from "./calcScrollWidth";

const modals = () => {
  const scroll = calcScrollWidth();

  function handleModal(triggerSelector, modalSelector, closeBtn, closeByOverlayClick = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = modal.querySelector(closeBtn),
      popups = document.querySelectorAll(`[data-modal]`);
      
    function openModal() {
      modal.style.display = `block`;
      document.body.classList.add(`modal-open`);
      document.body.style.marginRight = `${scroll}px`;
    }

    function closeModal() {
      closeAllPopups(popups);
      modal.style.display = `none`;
      document.body.classList.remove(`modal-open`);
      document.body.style.marginRight = `0px`;
    }

    function closeAllPopups(popupList) {
      popupList.forEach(popup => {
        popup.style.display = `none`;
      });
    }

    trigger.forEach(item => {
      item.addEventListener(`click`, e => {
        if (e.target && e.target.attributes.href) {
          e.preventDefault();
        }
        closeAllPopups(popups);
        openModal();
      });
    });

    close.addEventListener(`click`, closeModal);

    modal.addEventListener(`click`, e => {
      if (e.target && e.target === modal && closeByOverlayClick) {
        closeAllPopups(popups);
        closeModal();
      }
    });

  }
  
  function showModalAfterTime(modal, time) {
    setTimeout(() => {
      document.querySelector(modal).style.display = `block`;
      document.body.classList.add(`modal-open`);
      document.body.style.marginRight = `${scroll}px`;
    }, time);
  }
  showModalAfterTime(`.popup`, 60e3);

  handleModal(`.popup_engineer_btn`, `.popup_engineer`, `.popup_close`);
  handleModal(`.phone_link`, `.popup`, `.popup_close`);
  handleModal(`.popup_calc_btn`, `.popup_calc`, `.popup_calc_close`);
  handleModal(`.popup_calc_button`, `.popup_calc_profile`, `.popup_calc_profile_close`, false);
  handleModal(`.popup_calc_profile_button`, `.popup_calc_end`, `.popup_calc_end_close`, false);

};

export default modals;