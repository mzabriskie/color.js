var Color = require('./color'),
	util = require('./color-util');

/**
 * Constructs a HSL subclass of Color using the value provided
 *
 * @param value
 * @constructor
 */
Color.Hsl = function (value, channels) {
	this.value = value;
	this.channels = channels;
};

util.inherits(Color.Hsl, Color);

/**
 * Returns the individual channels as an array
 *
 * @returns {Array} HSL channels
 */
Color.Hsl.prototype.toArray = function () {
	return this.value;
};

/**
 * Returns the HSL channels to a HSL formatted string
 *
 * @returns {String} HSL value formatted as a string
 */
Color.Hsl.prototype.toString = function () {
	return 'hsl(' + this.value[0] + ', ' +
					this.value[1] + '%, ' +
					this.value[2] + '%)';
};

/**
 * Convert this Color to a HSL value
 *
 * @returns {String} HSL value of this Color
 */
Color.prototype.toHsl = function () {
	return new Color.Hsl(util.hslToArray(util.channelsToHslString(this.channels)), this.channels);
};

module.exports = Color.Hsl;