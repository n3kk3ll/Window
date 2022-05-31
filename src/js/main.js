import "./slider";
import modals from "./modules/modal";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeDataState from "./modules/changeDataState";

window.addEventListener(`DOMContentLoaded`, () => {
  `use strict`;

  let userDataState = {
    form: 0,
    type: `tree`
  };

  changeDataState(userDataState);

  modals();
  tabs(`.glazing_slider`, `.glazing_block`, `.glazing_content`, `active`);
  tabs(`.decoration_slider`, `.no_click`, `.decoration_content > div > div`, `after_click`);
  tabs(`.balcon_icons`, `.balcon_icons_img`, `.big_img > img`, `do_image_more`, `inline-block`);
  forms(userDataState);
});