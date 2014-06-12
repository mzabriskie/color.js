var Color = require('./color'),
	util = require('./color-util');

Color.Rgb = function (value) {
	this.value = value;
};

util.inherits(Color.Rgb, Color);

/**
 * Returns the individual channels as an array
 *
 * @returns {Array} RGB channels
 */
Color.Rgb.prototype.toArray = function () {
	return this.value;
};

/**
 * Returns the RGB channels to a RGB formatted string
 *
 * @returns {String} RGB value formatted as a string
 */
Color.Rgb.prototype.toString = function () {
	return 'rgb(' + this.value[0] + ', ' +
					this.value[1] + ', ' +
					this.value[2] + ')';
};

/**
 * Convert this Color to an RGB value
 *
 * @returns {String} RGB value of this Color
 */
Color.prototype.toRgb = function () {
	return new Color.Rgb(util.parse(util.channelsToRgbString(this.channels)));
};

module.exports = Color.Rgb;