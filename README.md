color.js [![Build Status](https://travis-ci.org/mzabriskie/color.js.png?branch=master)](https://travis-ci.org/mzabriskie/color.js)
========

Color utility for JavaScript

## Example

Transform color formats

```javascript
console.log(new Color('red').toHsl()); // hsl(0, 100%, 50%)
console.log(new Color('#ff0000').toRgb(); // rgb(255, 0, 0)
console.log(new Color('rgb(255, 0, 0)').toHex()); // #ff0000
```

Median value of two colors

```javascript
Color.median('white', 'black'); // returns '#7f7f7f'
Color.median('#009900', '#ffff00'); // returns '#7fbf00'
```

More detailed usages are available under <code>examples/</code>.

## API

#### Color(color)
Create a new `Color` instance

#### Color.prototype.toHex()
Get a `Color.Hex` instance of the color

#### Color.prototype.toHsl()
Get a `Color.Hsl` instance of the color

#### Color.prototype.toRgb()
Get a `Color.Rgb` instance of the color

#### Color.prototype.median(color)
Get the median value of the `Color` instance and another color

#### Color.isHex(color)
Determine if a color is represented using HEX

#### Color.isHsl(color)
Determine if a color is represented using HSL

#### Color.isRgb(color)
Determine if a color is represented using RGB

#### Color.isKeyword(color)
Determine if a color is represented using HTML keyword

#### Color.median(color1, color2)
Get the median value of two colors

#### Color.parse(color)
Parse any valid color to an `Array` of RGB channels

## License

Color.js is released under the MIT license.