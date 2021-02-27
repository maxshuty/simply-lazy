# Simply Lazy

A simple, lightweight (0.6kb), pure JavaScript image lazy loader that even works in IE\*

## Usage

Lazy loading doesn't have to be complicated. It's as simple as:

```
<script type="text/javascript" src="./simplyLazy.min.js"></script>
```

Then setting your images up with a `data-src` attribute:

```
<img data-src="/path/to/img.jpg" />
```

Then initializing the lazy loader:

```
SimplyLazy(optionalOptions).lazy(selector)
```

### Additionally you can pass it an `options` object to get callbacks or set default information.

Currently there are three callbacks and `defaultImage`:

1. `onImageLoad` - this is called after an image loads and it will receive the `imageElement` as a parameter.
2. `onImageError` - this is called if there is an error loading the image (i.e. 404), it also receives the `imageElement` as a parameter.
3. `allImagesFinished` - this is called when all images have been processed, regardless if there was an error loading any or not. This receives no parameters.
4. `defaultImage` - this is _only_ called `onImageError` and if it has a value. This can be useful if there is an error loading an image like a 404 but you still want to show a default placeholder image. The value you use for `defaultImage` will be set to the `src` of the `<img>` element. The example below is a `base64` string of an empty image placeholder.

Here is an example usage with all of the options:

```
SimplyLazy({
  onImageLoad: (imgEl) => {
    // Called after an image loads
  },
  onImageError: (imgEl) => {
    // Called if there is an error loading the image
  },
  allImagesFinished: () => {
    // Called after all images with the given selector have finished
  },
  defaultImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // An empty image, can be replaced with a known image URL
}).lazy(selector);
```

The `selector` can be any selector you would typically use when using `el.querySelectorAll`, like a class name.

In your HTML you only need to set a `data-src` equal to your image `src`. **Note:** Do not set the `src` or else you will override this plugin!

```
<img data-src"/path/to/img.jpg" />
```

## Browser Support

This is supported in all major browsers and will even work in IE with one simple tweak.

For IE to work you must add this Polyfill script to your app which will only be loaded in browsers that do not support `IntersectionObserver` (like IE). All other browsers will not load anything when using this script from Polyfill.io:

```
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
```

## Contributions

Contributions are always welcome. Please fork this repo and submit a PR for any issues or create an issue [here](https://github.com/maxshuty/simply-lazy/issues)

## Contributors

Max Poshusta
