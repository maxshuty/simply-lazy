document.addEventListener('DOMContentLoaded', function () {
  // DOM is loaded at this point, so we can call our function to initialize the SimplyLazy plugin
  let counter = 0;
  const counterEl = document.getElementById('counter');
  SimplyLazy({
    onImageLoad: () => {
      debugger;
      counter++;
      counterEl.innerHTML = counter;
    },
  }).lazy('img');
});
