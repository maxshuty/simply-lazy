document.addEventListener('DOMContentLoaded', function () {
  // DOM is loaded at this point, so we can call our function to initialize the SimplyLazy plugin
  let counter = 0;
  const counterEl = document.getElementById('counter');
  const loadedImagesEl = document.getElementById('loadedImages');

  const updateCounter = () => {
    counter++;
    counterEl.innerHTML = counter;
  };

  const addLoadedImageUrlToCard = (el) => {
    if (!el) {
      return;
    }

    loadedImagesEl.innerHTML += `<div>${counter}. ${el.getAttribute('src')}</div>`;
  };

  SimplyLazy({
    onImageLoad: (el) => {
      updateCounter();
      addLoadedImageUrlToCard(el);
    },
  }).lazy('img');
});
