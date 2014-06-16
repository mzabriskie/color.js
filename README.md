color.js [![Build Status](https://travis-ci.org/mzabriskie/color.js.png?branch=master)](https://travis-ci.org/mzabriskie/color.js)
========

Color utility for JavaScript

## Example

Parse color formats

```javascript
var red		= new Color('red'),
	yellow	= new Color('hsl(60, 100%, 50%)'),
	blue	= new Color('#00ffff'),
	green	= new Color('rgb(0, 128, 0)'),
	purple	= new Color([128, 0, 128]);
```

Format colors

```javascript
var color = new Color('red');
element.style.backgroundColor = color.toHsl(); // hsl(0, 100%, 50%)
element.style.backgroundColor = color.toRgb(); // rgb(255, 0, 0)
element.style.backgroundColor = color.toHex(); // #ff0000
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