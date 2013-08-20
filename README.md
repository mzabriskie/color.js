color.js
========

Color utility for JavaScript

## Example

Transform color formats

```javascript
new Color('red').toHsl() // returns 'hsl(0, 100%, 50%)'
new Color('#ff0000').toRgb(); // returns 'rgb(255, 0, 0)'
```

Median value of two colors

```javascript
Color.median('white', 'black'); // returns '#7f7f7f'
Color.median('#009900', '#ffff00'); // returns '#7fbf00'
```

## API

__Instance methods__

* toHex - Get the HEX value of the Color instance
* toHsl - Get the HSL value of the Color instance
* toRgb - Get the RGB value of the Color instance

__Static methods__

* median(color1, color2) - Get the median value of two colors
* normalize(color) - Take any valid color format and get the RGB values
* parse(color) - Parse any valid color and extract it's raw values

## License

Color.js is released under the MIT license.