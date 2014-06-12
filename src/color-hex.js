var util = require('./color-util');

module.exports = function (Color) {

/**
 * Constructs a HEX subclass of Color using the value provided
 *
 * @param value
 * @constructor
 */
function Hex(value, channels) {
	this.value = value;
	this.channels = channels;
}

util.inherits(Hex, Color);

/**
 * Returns the individual channels as an array
 *
 * @returns {Array} HEX channels
 */
Hex.prototype.toArray = function () {
	return this.value;
};

/**
 * Returns the HEX channels to a HEX formatted string
 *
 * @returns {String} HEX value formatted as a string
 */
Hex.prototype.toString = function () {
	return '#' + this.value.join('');
};

return Hex;

};