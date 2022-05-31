const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = `block`) => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(content => {
      content.style.display = `none`;
    });

    tabs.forEach(tab => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabContent(index = 0) {
    content[index].style.display = display;
    tabs[index].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener(`click`, e => {
    if(e.target && (e.target.classList.contains(tabSelector.replace(/\./, ``)) || e.target.parentNode.classList.contains(tabSelector.replace(/\./, ``)))) {
      tabs.forEach((tab, index) => {
        if(e.target === tab || e.target.parentNode === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
};

export default tabs;