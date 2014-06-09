var util = require('./color-util');

/**
 * Constructs a Color object using the color provided
 *
 * @param {String} color The value that this Color represents, can be HEX, HSL, RGB, or HTML named color
 * @constructor
 */
function Color(color) {
	this.channels = util.extractRgbChannels(color);
}

/**
 * Convert this Color to an RGB value
 *
 * @returns {String} RGB value of this Color
 */
Color.prototype.toRgb = function () {
	return util.channelsToRgbString(this.channels);
};

/**
 * Convert this Color to a HSL value
 *
 * @returns {String} HSL value of this Color
 */
Color.prototype.toHsl = function () {
	return util.channelsToHslString(this.channels);
};

/**
 * Convert this Color to a HEX value
 *
 * @returns {String} HEX value of this Color
 */
Color.prototype.toHex = function () {
	return util.channelsToHexString(this.channels);
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

Color.isRgb = util.isRgb;
Color.isHsl = util.isHsl;
Color.isHex = util.isHex;
Color.isKeyword = util.isKeyword;
Color.median = util.median;
Color.parse = util.parse;

module.exports = Color;