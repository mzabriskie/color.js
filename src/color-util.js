// Regular Expressions for parsing colors
var REGEXP_RGB = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/,
	REGEXP_HSL = /^hsl\((\d{1,3}),(\d{1,3})%,(\d{1,3})%\)$/,
	REGEXP_HEX = /^#?(\w{1,2})(\w{1,2})(\w{1,2})$/,
	REGEXP_WHITESPACE = /\s+/g;

// HTML named colors
var COLOR_TABLE = require('./color-table');

var util = {};

/**
 * Trim whitespace from a string value
 * @param {String} str The value to be trimmed
 * @returns {String} Value trimmed of excess whitespace
 */
util.trim = function(str) {
	return str ? String(str).replace(REGEXP_WHITESPACE, '') : '';
};

/**
 * Inherit the prototype from one object to another
 *
 * @param {Function} child The class that will have it's prototype changed
 * @param {Function} parent The class that prototype will be inherited
 * @returns {Function} The child class
 */
util.inherits = function inherits(child, parent) {
	for (var k in parent) {
		if (parent.hasOwnProperty(k)) {
			child[k] = parent[k];
		}
	}

	function ctor() {
		this.constructor = child;
	}

	ctor.prototype = parent.prototype;
	child.prototype = new ctor();
	return child;
};

/**
 * Parse a color value represented as either HEX, HSL, RGB, HTML named color or a Color instance
 *
 * @param {String|Color} color The color to be parsed
 * @returns {Array} If the color provided is valid the color represented as an array of RGB values, otherwise null
 */
util.parse = function(color) {
	var hex = null;

	// Short circuit if null was provided
	if (color === null) {
		return hex;
	}

	// Already dealing with a Color
	if (typeof color === 'object' && typeof color.toHex === 'function') {
		hex = color.toHex();
	}
	// Convert keyword to HEX
	else if (util.isKeyword(color)) {
		hex = util.keyToHex(color);
	}
	// Convert RGB to HEX
	else if (util.isRgb(color)) {
		hex = util.rgbToHex(color);
	}
	// Convert HSL to HEX
	else if (util.isHsl(color)) {
		hex = util.hslToHex(color);
	}
	// Default to HEX
	else if (util.isHex(color)) {
		hex = color;
	}

	// Normalize HEX
	if (hex !== null) {
		hex = '#' + util.hexToArray(hex).join('');
	}

	return util.hexToRgb(hex, true);
};

/**
 * Convert RGB channels to RGB formatted string
 *
 * @returns {String} RGB value of channels
 */
util.formatRgb = function (channels) {
	return 'rgb(' + channels[0] + ', ' + channels[1] + ', ' + channels[2] + ')';
};

/**
 * Convert RGB channels to a HSL formatted string
 *
 * @returns {String} HSL value of channels
 */
util.formatHsl = function (channels) {
	var r = channels[0] / 255,
		g = channels[1] / 255,
		b = channels[2] / 255;

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
 * Convert RGB channels to a HEX formatted string
 *
 * @returns {String} HEX value of channels
 */
util.formatHex = function (channels) {
	var hex = [
		(channels[0] - 0).toString(16),
		(channels[1] - 0).toString(16),
		(channels[2] - 0).toString(16)
	];

	for (var i=0; i<hex.length; i++) {
		if (hex[i].length == 1) hex[i] = '0' + hex[i];
	}

	return '#' + hex.join('');
};

/* -- Color to Array conversions -- */

/**
 * Convert RGB color to an array
 * @param {String} rgb The RGB color to be converted
 * @returns {Array} RGB as an array (e.g., 'rgb(255, 0, 0)' -> [255, 0, 0])
 */
util.rgbToArray = function(rgb) {
	var match = util.trim(rgb).match(REGEXP_RGB);
	return match !== null ? match.slice(1) : null;
};

/**
 * Convert HSL color to an array
 * @param {String} hsl The HSL color to be converted
 * @returns {Array} HSL as an array (e.g., 'hsl(0, 100%, 50%)' -> [0, 100, 50])
 */
util.hslToArray = function(hsl) {
	var match = util.trim(hsl).match(REGEXP_HSL);
	return match !== null ? match.slice(1) : null;
};

/**
 * Convert HEX color to an array
 * @param {String} hex The HEX color to be converted
 * @returns {Array} HEX as an array (e.g., '#ff0000' -> ['ff', '00', '00'])
 */
util.hexToArray = function(hex) {
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
};

/* -- Color format conversions -- */

/**
 * Convert RGB value to HEX
 * @param {String} rgb The RGB color to be converted
 * @param {boolean} [array] Whether or not the value should be returned as an array
 * @returns {String|Array} If the color is valid color as HEX, otherwise null
 */
util.rgbToHex = function(rgb, array) {
	var tmp = util.rgbToArray(rgb),
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
};

/**
 * Convert an HSL hue value to RGB
 * http://stackoverflow.com/questions/11804027/farbtastic-convert-hsl-back-to-rgb-or-hex
 *
 * @param {Number} m1
 * @param {Number} m2
 * @param {Number} hue
 * @returns {Number} HSL hue converted to RGB
 */
util.hueToRgb = function(m1, m2, hue) {
	var v;

	if (hue < 0) hue += 1;
	else if (hue > 1) hue -= 1;

	if (6 * hue < 1) v = m1 + (m2 - m1) * hue * 6;
	else if (2 * hue < 1) v = m2;
	else if (3 * hue < 2) v = m1 + (m2 - m1) * (2/3 - hue) * 6;
	else v = m1;

	return 255 * v;
};

/**
 * Convert HSL value to HEX
 * http://stackoverflow.com/questions/11804027/farbtastic-convert-hsl-back-to-rgb-or-hex
 *
 * @param {String} hsl The HSL color to be converted
 * @param {boolean} [array] Whether or not the value should be returned as an array
 * @returns {String|Array} If the color is valid color as HEX, otherwise null
 */
util.hslToHex = function(hsl, array) {
	var tmp = util.hslToArray(hsl);
	if (tmp === null) {
		return null;
	}

	var r, g, b,
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
		r = Math.round(util.hueToRgb(m1, m2, hue + 1/3));
		g = Math.round(util.hueToRgb(m1, m2, hue));
		b = Math.round(util.hueToRgb(m1, m2, hue - 1/3));
	}

	return util.rgbToHex('rgb(' + r + ', ' + g + ', ' + b + ')', array);
};

/**
 * Convert HEX value to RGB
 * @param {String} hex The HEX color to be converted
 * @param {boolean} [array] Whether or not the value should be returned as an array
 * @returns {String|Array} If the color is valid color as RGB, otherwise null
 */
util.hexToRgb = function(hex, array) {
	var tmp = util.hexToArray(hex),
		rgb = null;

	if (tmp && tmp.length == 3) {
		rgb = tmp.map(function(value){
			if (value.length == 1) value += value;
			return parseInt(value, 16);
		});
		rgb = (array) ? rgb : util.formatRgb(rgb);
	}

	return rgb;
};

/**
 * Convert HTML keyword value to HEX
 * @param {String} key The HTML keyword color to be converted
 * @param {boolean} [array] Whether or not the value should be returned as an array
 * @returns {String|Array} If the color is valid color as HEX, otherwise null
 */
util.keyToHex = function(key, array) {
	var hex = null;

	key = key.toLowerCase();
	if (util.isKeyword(key)) {
		hex = util.hexToArray(COLOR_TABLE[key]);

		hex = (array) ? hex : '#' + hex.join('');
	}

	return hex;
};

/**
 * Determine if a color is represented using RGB
 * @param {String} color The color to be tested
 * @returns {boolean} True if the color is RGB, otherwise false
 */
util.isRgb = function (color) {
	return util.rgbToArray(color) !== null;
};

/**
 * Determine if a color is represented using HSL
 * @param {String} color The color to be tested
 * @returns {boolean} True if the color is HSL, otherwise false
 */
util.isHsl = function (color) {
	return util.hslToArray(color) !== null;
};

/**
 * Determine if a color is represented using HEX
 * @param {String} color The color to be tested
 * @returns {boolean} True if the color is HEX, otherwise false
 */
util.isHex = function (color) {
	return util.hexToArray(color) !== null;
};

/**
 * Determine if a color is represented using HTML keyword
 * @param {String} color The color to be tested
 * @returns {boolean} True if the color is HTML keyword, otherwise false
 */
util.isKeyword = function (color) {
	return COLOR_TABLE.hasOwnProperty(color.toLowerCase());
};

/**
 * Get the median value of two colors
 *
 * @param {String|Color} color1
 * @param {String|Color} color2
 * @returns {String} The median value in HEX of the colors provided
 */
util.median = function (color1, color2) {
	var med = null,
		rgb1 = util.parse(color1),
		rgb2 = util.parse(color2);

	if (rgb1 !== null && rgb2 !== null) {
		var r = Math.floor((rgb1[0] + rgb2[0]) / 2),
			g = Math.floor((rgb1[1] + rgb2[1]) / 2),
			b = Math.floor((rgb1[2] + rgb2[2]) / 2);

		med = util.rgbToHex('rgb(' + r + ', ' + g + ', ' + b + ')');
	}

	return med;
};

module.exports = util;