(function () {

	/**
     * HTML named colors
     */
    var COLOR_TABLE = {
		'aliceblue': '#f0f8ff',
		'antiquewhite': '#faebd7',
		'aqua': '#00ffff',
		'aquamarine': '#7fffd4',
		'azure': '#f0ffff',
		'beige': '#f5f5dc',
		'bisque': '#ffe4c4',
		'black': '#000000',
		'blanchedalmond': '#ffebcd',
		'blue': '#0000ff',
		'blueviolet': '#8a2be2',
		'brown': '#a52a2a',
		'burlywood': '#deb887',
		'cadetblue': '#5f9ea0',
		'chartreuse': '#7fff00',
		'chocolate': '#d2691e',
		'coral': '#ff7f50',
		'cornflowerblue': '#6495ed',
		'cornsilk': '#fff8dc',
		'crimson': '#dc143c',
		'cyan': '#00ffff',
		'darkblue': '#00008b',
		'darkcyan': '#008b8b',
		'darkgoldenrod': '#b8860b',
		'darkgray': '#a9a9a9',
		'darkgreen': '#006400',
		'darkgrey': '#a9a9a9',
		'darkkhaki': '#bdb76b',
		'darkmagenta': '#8b008b',
		'darkolivegreen': '#556b2f',
		'darkorange': '#ff8c00',
		'darkorchid': '#9932cc',
		'darkred': '#8b0000',
		'darksalmon': '#e9967a',
		'darkseagreen': '#8fbc8f',
		'darkslateblue': '#483d8b',
		'darkslategray': '#2f4f4f',
		'darkslategrey': '#2f4f4f',
		'darkturquoise': '#00ced1',
		'darkviolet': '#9400d3',
		'deeppink': '#ff1493',
		'deepskyblue': '#00bfff',
		'dimgray': '#696969',
		'dimgrey': '#696969',
		'dodgerblue': '#1e90ff',
		'firebrick': '#b22222',
		'floralwhite': '#fffaf0',
		'forestgreen': '#228b22',
		'fuchsia': '#ff00ff',
		'gainsboro': '#dcdcdc',
		'ghostwhite': '#f8f8ff',
		'gold': '#ffd700',
		'goldenrod': '#daa520',
		'gray': '#808080',
		'green': '#008000',
		'greenyellow': '#adff2f',
		'grey': '#808080',
		'honeydew': '#f0fff0',
		'hotpink': '#ff69b4',
		'indianred': '#cd5c5c',
		'indigo': '#4b0082',
		'ivory': '#fffff0',
		'khaki': '#f0e68c',
		'lavender': '#e6e6fa',
		'lavenderblush': '#fff0f5',
		'lawngreen': '#7cfc00',
		'lemonchiffon': '#fffacd',
		'lightblue': '#add8e6',
		'lightcoral': '#f08080',
		'lightcyan': '#e0ffff',
		'lightgoldenrodyellow': '#fafad2',
		'lightgray': '#d3d3d3',
		'lightgreen': '#90ee90',
		'lightgrey': '#d3d3d3',
		'lightpink': '#ffb6c1',
		'lightsalmon': '#ffa07a',
		'lightseagreen': '#20b2aa',
		'lightskyblue': '#87cefa',
		'lightslategray': '#778899',
		'lightslategrey': '#778899',
		'lightsteelblue': '#b0c4de',
		'lightyellow': '#ffffe0',
		'lime': '#00ff00',
		'limegreen': '#32cd32',
		'linen': '#faf0e6',
		'magenta': '#ff00ff',
		'maroon': '#800000',
		'mediumaquamarine': '#66cdaa',
		'mediumblue': '#0000cd',
		'mediumorchid': '#ba55d3',
		'mediumpurple': '#9370db',
		'mediumseagreen': '#3cb371',
		'mediumslateblue': '#7b68ee',
		'mediumspringgreen': '#00fa9a',
		'mediumturquoise': '#48d1cc',
		'mediumvioletred': '#c71585',
		'midnightblue': '#191970',
		'mintcream': '#f5fffa',
		'mistyrose': '#ffe4e1',
		'moccasin': '#ffe4b5',
		'navajowhite': '#ffdead',
		'navy': '#000080',
		'oldlace': '#fdf5e6',
		'olive': '#808000',
		'olivedrab': '#6b8e23',
		'orange': '#ffa500',
		'orangered': '#ff4500',
		'orchid': '#da70d6',
		'palegoldenrod': '#eee8aa',
		'palegreen': '#98fb98',
		'paleturquoise': '#afeeee',
		'palevioletred': '#db7093',
		'papayawhip': '#ffefd5',
		'peachpuff': '#ffdab9',
		'peru': '#cd853f',
		'pink': '#ffc0cb',
		'plum': '#dda0dd',
		'powderblue': '#b0e0e6',
		'purple': '#800080',
		'red': '#ff0000',
		'rosybrown': '#bc8f8f',
		'royalblue': '#4169e1',
		'saddlebrown': '#8b4513',
		'salmon': '#fa8072',
		'sandybrown': '#f4a460',
		'seagreen': '#2e8b57',
		'seashell': '#fff5ee',
		'sienna': '#a0522d',
		'silver': '#c0c0c0',
		'skyblue': '#87ceeb',
		'slateblue': '#6a5acd',
		'slategray': '#708090',
		'slategrey': '#708090',
		'snow': '#fffafa',
		'springgreen': '#00ff7f',
		'steelblue': '#4682b4',
		'tan': '#d2b48c',
		'teal': '#008080',
		'thistle': '#d8bfd8',
		'tomato': '#ff6347',
		'turquoise': '#40e0d0',
		'violet': '#ee82ee',
		'wheat': '#f5deb3',
		'white': '#ffffff',
		'whitesmoke': '#f5f5f5',
		'yellow': '#ffff00',
		'yellowgreen': '#9acd32'
	};

	/* Regular Expressions for parsing colors */
    var REGEXP_RGB = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/,
		REGEXP_HSL = /^hsl\((\d{1,3}),(\d{1,3})%,(\d{1,3})%\)$/,
		REGEXP_HEX = /^#?(\w{1,2})(\w{1,2})(\w{1,2})$/,
		REGEXP_WHITESPACE = /\s+/g;

    /**
     * Trim whitespace from a string value
     * @param {String} str The value to be trimmed
     * @returns {String} Value trimmed of excess whitespace
     */
    function trim(str) {
		return str ? String(str).replace(REGEXP_WHITESPACE, '') : '';
	}

    /**
     * Normalize a color value represented as either HEX, HSL, RGB, HTML named color or a Color instance
     *
     * @param {String|Color} color The color to be normalized
     * @returns {Array} If the color provided is valid the color represented as an array of RGB values, otherwise null
     */
    function extractRgbChannels(color) {
        var hex = null;

        // Short circuit if null was provided
        if (color === null) {
            return hex;
        }

        // Already dealing with a Color
        if (color instanceof Color) {
            hex = color.toHex();
        }
        // Convert keyword to HEX
        else if (isKeyword(color)) {
            hex = keyToHex(color);
        }
        // Convert RGB to HEX
        else if (isRgb(color)) {
            hex = rgbToHex(color);
        }
        // Convert HSL to HEX
        else if (isHsl(color)) {
            hex = hslToHex(color);
        }
        // Default to HEX
        else if (isHex(color)) {
            hex = color;
        }

        // Normalize HEX
        if (hex !== null) {
            hex = '#' + hexToArray(hex).join('');
        }

        return hexToRgb(hex, true);
    }

	/* -- Color to Array conversions -- */

    /**
     * Convert RGB color to an array
     * @param {String} rgb The RGB color to be converted
     * @returns {Array} RGB as an array (e.g., 'rgb(255, 0, 0)' -> [255, 0, 0])
     */
	function rgbToArray(rgb) {
		var match = trim(rgb).match(REGEXP_RGB);
		return match !== null ? match.slice(1) : null;
	}

    /**
     * Convert HSL color to an array
     * @param {String} hsl The HSL color to be converted
     * @returns {Array} HSL as an array (e.g., 'hsl(0, 100%, 50%)' -> [0, 100, 50])
     */
    function hslToArray(hsl) {
		var match = trim(hsl).match(REGEXP_HSL);
		return match !== null ? match.slice(1) : null;
	}

    /**
     * Convert HEX color to an array
     * @param {String} hex The HEX color to be converted
     * @returns {Array} HEX as an array (e.g., '#ff0000' -> ['ff', '00', '00'])
     */
    function hexToArray(hex) {
		var match = String(hex).toLowerCase().match(REGEXP_HEX);
		var arr = match !== null ? match.slice(1) : null;

		if (arr) {
			if (arr[0].length != arr[1].length || arr[0].length != arr[2].length) {
				arr = null;
			}
			else {
				if (isNaN(parseInt(arr[0], 16)) ||
					isNaN(parseInt(arr[1], 16)) ||
					isNaN(parseInt(arr[2], 16))) {
					arr = null;
				}
				else if (arr[0].length == 1) {
					arr = [String(arr[0]) + String(arr[0]),
						String(arr[1]) + String(arr[1]),
						String(arr[2]) + String(arr[2])];
				}
			}
		}

		return arr;
	}

	/* -- Color format conversions -- */

    /**
     * Convert RGB value to HEX
     * @param {String} rgb The RGB color to be converted
     * @param {boolean} [array] Whether or not the value should be returned as an array
     * @returns {String|Array} If the color is valid color as HEX, otherwise null
     */
	function rgbToHex(rgb, array) {
		var tmp = rgbToArray(rgb),
			hex = null;

		if (tmp && tmp.length == 3) {
			hex = [];
			for (var i=0; i<3; i++){
				var bit = (tmp[i] - 0).toString(16);
				hex.push((bit.length == 1) ? '0' + bit : bit);
			}
			hex = (array) ? hex : '#' + hex.join('');
		}

		return hex;
	}

    /**
     * Convert an HSL hue value to RGB
     * http://stackoverflow.com/questions/11804027/farbtastic-convert-hsl-back-to-rgb-or-hex
     *
     * @param {Number} m1
     * @param {Number} m2
     * @param {Number} hue
     * @returns {Number} HSL hue converted to RGB
     */
    function hueToRgb(m1, m2, hue) {
		var v;

		if (hue < 0) hue += 1;
		else if (hue > 1) hue -= 1;

		if (6 * hue < 1) v = m1 + (m2 - m1) * hue * 6;
		else if (2 * hue < 1) v = m2;
		else if (3 * hue < 2) v = m1 + (m2 - m1) * (2/3 - hue) * 6;
		else v = m1;

		return 255 * v;
	}

    /**
     * Convert HSL value to HEX
     * http://stackoverflow.com/questions/11804027/farbtastic-convert-hsl-back-to-rgb-or-hex
     *
     * @param {String} hsl The HSL color to be converted
     * @param {boolean} [array] Whether or not the value should be returned as an array
     * @returns {String|Array} If the color is valid color as HEX, otherwise null
     */
    function hslToHex(hsl, array) {
		var tmp = hslToArray(hsl),
			r, g, b,
			m1, m2, hue,
			h = tmp[0],
			s = tmp[1],
			l = tmp[2];

		s /= 100;
		l /= 100;

		if (s === 0) {
			r = g = b = Math.round(l * 255);
		} else {
			if (l <= 0.5) m2 = l * (s + 1);
			else m2 = l + s - l * s;

			m1 = l * 2 - m2;
			hue = h / 360;
			r = Math.round(hueToRgb(m1, m2, hue + 1/3));
			g = Math.round(hueToRgb(m1, m2, hue));
			b = Math.round(hueToRgb(m1, m2, hue - 1/3));
		}

		return rgbToHex('rgb(' + r + ', ' + g + ', ' + b + ')', array);
	}

    /**
     * Convert HEX value to RGB
     * @param {String} hex The HEX color to be converted
     * @param {boolean} [array] Whether or not the value should be returned as an array
     * @returns {String|Array} If the color is valid color as RGB, otherwise null
     */
    function hexToRgb(hex, array) {
		var tmp = hexToArray(hex),
			rgb = null;

		if (tmp && tmp.length == 3) {
			rgb = tmp.map(function(value){
				if (value.length == 1) value += value;
				return parseInt(value, 16);
			});
			rgb = (array) ? rgb : 'rgb(' + rgb + ')';
		}

		return rgb;
	}

    /**
     * Convert HTML keyword value to HEX
     * @param {String} key The HTML keyword color to be converted
     * @param {boolean} [array] Whether or not the value should be returned as an array
     * @returns {String|Array} If the color is valid color as HEX, otherwise null
     */
    function keyToHex(key, array) {
		var hex = null;

		key = key.toLowerCase();
		if (isKeyword(key)) {
			hex = hexToArray(COLOR_TABLE[key]);

			if (!array) {
				hex = hex.join('');
			}
		}

		return hex;
	}

    /* -- Color class definition -- */

    /**
     * Constructs a Color object using the color provided
     *
     * @param {String} color The value that this Color represents, can be HEX, HSL, RGB, or HTML named color
     * @constructor
     */
    function Color(color) {
		this.channels = extractRgbChannels(color);
	}

    Color.version = '0.1.6';

    /**
     * Convert this Color to an RGB value
     *
     * @returns {String} RGB value of this Color
     */
    Color.prototype.toRgb = function () {
		return 'rgb(' + this.channels[0] + ', ' + this.channels[1] + ', ' + this.channels[2] + ')';
	};

    /**
     * Convert this Color to a HSL value
     *
     * @returns {String} HSL value of this Color
     */
    Color.prototype.toHsl = function () {
		var r = this.channels[0] / 255,
			g = this.channels[1] / 255,
			b = this.channels[2] / 255;

		var max = Math.max(r, g, b),
			min = Math.min(r, g, b),
			h, s,
			l = (max + min) / 2,
			d = max - min;

		if (max === min) {
			h = s = 0;
		} else {
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;

				case b:
					h = (r - g) / d + 4;
					break;
			}

			h /= 6;
		}

		return 'hsl(' + Math.floor(h * 360) + ', ' + Math.floor(s * 100) + '%, ' + Math.floor(l * 100) + '%)';
	};

    /**
     * Convert this Color to a HEX value
     *
     * @returns {String} HEX value of this Color
     */
    Color.prototype.toHex = function () {
		var hex = [
			(this.channels[0] - 0).toString(16),
			(this.channels[1] - 0).toString(16),
			(this.channels[2] - 0).toString(16)
		];

		for (var i=0; i<hex.length; i++) {
			if (hex[i].length == 1) hex[i] = '0' + hex[i];
		}

		return '#' + hex.join('');
	};

    /**
     * Get the median value of two colors
     *
     * @param {String|Color} color
     * @returns {String} The median value in HEX of the this Color instance and the color provided
     */
    Color.prototype.median = function (color) {
        return Color.median(this, color);
    };

    /* -- Color class static methods -- */

    /**
     * Determine if a color is represented using RGB
     * @param {String} color The color to be tested
     * @returns {boolean} True if the color is RGB, otherwise false
     */
    var isRgb = Color.isRgb = function (color) {
        return rgbToArray(color) !== null;
    };

    /**
     * Determine if a color is represented using HSL
     * @param {String} color The color to be tested
     * @returns {boolean} True if the color is HSL, otherwise false
     */
    var isHsl = Color.isHsl = function (color) {
        return hslToArray(color) !== null;
    };

    /**
     * Determine if a color is represented using HEX
     * @param {String} color The color to be tested
     * @returns {boolean} True if the color is HEX, otherwise false
     */
    var isHex = Color.isHex = function (color) {
        return hexToArray(color) !== null;
    };

    /**
     * Determine if a color is represented using HTML keyword
     * @param {String} color The color to be tested
     * @returns {boolean} True if the color is HTML keyword, otherwise false
     */
    var isKeyword = Color.isKeyword = function (color) {
        return COLOR_TABLE.hasOwnProperty(color.toLowerCase());
    };

    /**
     * Get the median value of two colors
     *
     * @param {String|Color} color1
     * @param {String|Color} color2
     * @returns {String} The median value in HEX of the colors provided
     */
    Color.median = function (color1, color2) {
		var med = null,
			rgb1 = extractRgbChannels(color1),
			rgb2 = extractRgbChannels(color2);

		if (rgb1 !== null && rgb2 !== null) {
			var r = Math.floor((rgb1[0] + rgb2[0]) / 2),
				g = Math.floor((rgb1[1] + rgb2[1]) / 2),
				b = Math.floor((rgb1[2] + rgb2[2]) / 2);

			med = rgbToHex('rgb(' + r + ', ' + g + ', ' + b + ')');
		}

		return med;
	};

    /**
     * Parse a color value represented as either HEX, HSL or RGB
     *
     * @param {String} color The color to be parsed
     * @returns {Array} If the color provided is valid the color broken down to it's raw values, otherwise null
     */
    Color.parse = function (color) {
		var parsed = null;

		if (isRgb(color)) {
			parsed = rgbToArray(color);
		}
		else if (isHsl(color)) {
			parsed = hslToArray(color);
		}
		else if (isHex(color)) {
			parsed = hexToArray(color);
		}

		return parsed;
	};

    /* -- Expose Color -- */

	if (typeof define === 'function' && define.amd) {
		define('Color', [], function () { return Color; });
	} else if (typeof module !== 'undefined') {
		module.exports = Color;
	} else {
		this.Color = Color;
	}

}).call(this);
