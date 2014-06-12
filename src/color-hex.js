var Color = require('./color'),
	util = require('./color-util');

/**
 * Constructs a HEX subclass of Color using the value provided
 *
 * @param value
 * @constructor
 */
Color.Hex = function (value, channels) {
	this.value = value;
	this.channels = channels;
};

util.inherits(Color.Hex, Color);


/**
 * Returns the individual channels as an array
 *
 * @returns {Array} HEX channels
 */
Color.Hex.prototype.toArray = function () {
	return this.value;
};

/**
 * Returns the HEX channels to a HEX formatted string
 *
 * @returns {String} HEX value formatted as a string
 */
Color.Hex.prototype.toString = function () {
	return '#' + this.value.join('');
};

/**
 * Convert this Color to a HEX value
 *
 * @returns {String} HEX value of this Color
 */
Color.prototype.toHex = function () {
	return new Color.Hex(util.parse(util.channelsToHexString(this.channels)), this.channels);
};

module.exports = Color.Hex;