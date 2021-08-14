// DOM is loaded at this point, this is the pure JS version of $(document).ready()
document.addEventListener('DOMContentLoaded', function () {
  const allLazyImgs = document.querySelectorAll('[data-src]');
  allLazyImgs.forEach((imgEl) => {
    imgEl;
  });

  let counter = 0;
  const counterEl = document.getElementById('counter');
  const loadedImagesEl = document.getElementById('loadedImages');

  // Updating the count for the number of images that have been loaded so far
  const updateCounter = () => {
    counter++;
    counterEl.innerHTML = counter;
  };

  // Adds the src URL to the card displaying which images have been loaded
  const addLoadedImageUrlToCard = (el) => {
    if (!el) {
      return;
    }

    loadedImagesEl.innerHTML += `
      <div>
        ${counter}. ${el.getAttribute('src')}
      </div>
    `;
  };

  // Initializing SimplyLazy for all `img` elements
  SimplyLazy({
    onImageLoad: (el) => {
      updateCounter();
      addLoadedImageUrlToCard(el);
    },
    defaultImage: './defaultImage.png',
  }).lazy('img');
});
