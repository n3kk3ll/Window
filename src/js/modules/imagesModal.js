import calcScrollWidth from "./calcScrollWidth";

const imagesModal = () => {
  const imgPopup = document.createElement(`div`),
        section = document.querySelector(`.works`),
        bigImage = document.createElement(`img`),
        scroll = calcScrollWidth();

  imgPopup.classList.add(`popup_works`);
  section.appendChild(imgPopup);
  imgPopup.appendChild(bigImage);

  section.addEventListener(`click`, e => {
    e.preventDefault();

    if(e.target && e.target.classList.contains(`preview`)) {
      imgPopup.style.display = `flex`;
      document.body.classList.add(`modal-open`);
      document.body.style.marginRight = `${scroll}px`;
      
      const path = e.target.parentNode.getAttribute(`href`);
      bigImage.setAttribute(`src`, path);
    }

    if(e.target === imgPopup) {
      imgPopup.style.display = `none`;
      document.body.classList.remove(`modal-open`);
      document.body.style.marginRight = `0px`;
    }
  });
};

export default imagesModal;