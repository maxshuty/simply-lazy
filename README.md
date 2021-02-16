# Simply Lazy

## A simple, lightweight (0.5kb), pure JavaScript image lazy loader that even works in IE\*

### TODO: (as this was just recently created, this still needs to be filled out).

# Usage

It's as simple as:

```
SimplyLazy().lazy(selector)
```

Or you can pass it options to get call backs like so:

```
          SimplyLazy({
                        onImageLoad: (imgEl) => {
                            // Called after an image loads
                        },
                        onImageError: function(imgEl) {
                           // Called if there is an error loading the image
                        },
                        defaultImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // An empty image, can be replaced with a known image URL
                    }).lazy(selector);
```

Where `selector` can be a class name, or any selector you would typically use when using `el.querySelectorAll`. The default image can be

Then in your HTML you only need to set a `data-src` equal to your image `src`. **Note:** Do not set the src at all!

```
<img data-src"imgSrc">
```
