import checkNumberInputs from "./checkNumberInputs";

const forms = userData => {
  const allForms = document.querySelectorAll(`form`),
    inputs = document.querySelectorAll(`input`);

  const message = {
    processing: `Идёт отправка`,
    success: `Отправлено`,
    failure: `Ошибка`,
  };

  const postData = async (url, data) => {
    document.querySelector(`.status`).textContent = message.processing;
    let res = await fetch(url, {
      method: `POST`,
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(input => input.value = ``);
  };

  allForms.forEach(form => {
    form.addEventListener(`submit`, e => {
      e.preventDefault();

      let statusMessage = document.createElement(`div`);
      statusMessage.classList.add(`status`);
      form.appendChild(statusMessage);

      const formData = new FormData(form);

      if(form.getAttribute(`data-calc`) === `end`) {
        for(let key in userData) {
          formData.append(key, userData[key]);
        }
      }

      postData(`assets/server.php`, formData)
      .then(() => {
        statusMessage.textContent = message.success;
      })
      .catch(() => statusMessage.textContent = message.failure)
      .finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      });
    });
  });

  checkNumberInputs(`input[name="user_phone"]`);

};

export default forms;