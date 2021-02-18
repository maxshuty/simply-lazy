/* By Max Poshusta | v1.0.0 | https://github.com/maxshuty/simply-lazy */

let SimplyLazy = (options) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 || entry.isIntersecting) {
        const image = entry.target;
        if (image.hasAttribute('src')) {
          // Image has been loaded already
          return;
        }

        // Image has not been loaded so load it
        const sourceUrl = image.getAttribute('data-src');
        image.setAttribute('src', sourceUrl);

        if (!options) {
          observer.unobserve(image);
          return;
        }

        image.onload = () => {
          if (options.onImageLoad) {
            options.onImageLoad(image);
          }
        };

        image.onerror = () => {
          if (options.defaultImage) {
            image.setAttribute('src', options.defaultImage);
          }

          if (options.onImageError) {
            options.onImageError(image);
          }
        };

        observer.unobserve(image);
      }
    });
  });

  return {
    lazy: (selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        observer.observe(el);
      });
    },
  };
};
