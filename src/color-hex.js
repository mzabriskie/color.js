var util = require('./color-util');

module.exports = function (Color) {

/**
 * Constructs a HEX subclass of Color using the value provided
 *
 * @param value
 * @constructor
 */
function Hex(value, channels) {
	if (typeof value === 'object' && value.constructor === Array &&
		typeof channels === 'object' && channels.constructor === Array) {
		this.value = value;
		this.channels = channels;
	}
	else if (arguments.length === 1 && util.isHex(value)) {
		this.value = util.hexToArray(value);
		this.channels = this.value;
	}
	else if (arguments.length === 3) {
		this.value = [arguments[0], arguments[1], arguments[2]];
		this.channels = this.value;
	}
}

util.inherits(Hex, Color);

/**
 * Returns the individual channels as an array
 *
 * @returns {Array} HEX value
 */
Hex.prototype.valueOf = function () {
	return this.value;
};

/**
 * Returns the HEX value to a HEX formatted string
 *
 * @returns {String} HEX value formatted as a string
 */
Hex.prototype.toString = function () {
	return '#' + this.value.join('');
};

return Hex;

};