const checkNumberInputs = (selector) => {
  const inputsList = document.querySelectorAll(selector);

  inputsList.forEach(input => {
    input.addEventListener(`input`, () => {
      input.value = input.value.replace(/\D/, ``);
    });
  });
};

export default checkNumberInputs;