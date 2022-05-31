import checkNumberInputs from "./checkNumberInputs";

const changeDataState = (data) => {
  const windowForm = document.querySelectorAll(`.balcon_icons_img`),
    windowWidth = document.querySelectorAll(`#width`),
    windowHeight = document.querySelectorAll(`#height`),
    windowType = document.querySelectorAll(`#view_type`),
    windowProfile = document.querySelectorAll(`.checkbox`);

  checkNumberInputs(`#width`);
  checkNumberInputs(`#height`);

  function bindActionToElement(event, elem, prop) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case `SPAN`:
            data[prop] = index;
            break;
          case `INPUT`:
            if (item.getAttribute(`type`) === `checkbox`) {
              index === 0 ? data[prop] = `Холодное` : data[prop] = `Тёплое`;
              elem.forEach((checkbox, j) => {
                checkbox.checked = false;
                if(index === j) {
                  checkbox.checked = true;
                }
              });
            } else {
              data[prop] = item.value;
            }
            break;
          case `SELECT`:
            data[prop] = item.value;
            break;
        }
      });
    });
  }

  bindActionToElement(`click`, windowForm, `form`);
  bindActionToElement(`input`, windowWidth, `width`);
  bindActionToElement(`input`, windowHeight, `height`);
  bindActionToElement(`change`, windowType, `type`);
  bindActionToElement(`change`, windowProfile, `profile`);

};

export default changeDataState;