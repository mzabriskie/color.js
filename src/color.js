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
 * Get the median value of two colors
 *
 * @param {String|Color} color
 * @returns {String} The median value in HEX of the this Color instance and the color provided
 */
Color.prototype.median = function (color) {
	return Color.median(this, color);
};

// Static methods
Color.isRgb = util.isRgb;
Color.isHsl = util.isHsl;
Color.isHex = util.isHex;
Color.isKeyword = util.isKeyword;
Color.median = util.median;
Color.parse = util.parse;

module.exports = Color;