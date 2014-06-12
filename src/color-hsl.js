var util = require('./color-util');

module.exports = function (Color) {

/**
 * Constructs a HSL subclass of Color using the value provided
 *
 * @param value
 * @constructor
 */
function Hsl(value, channels) {
	if (typeof value === 'object' && value.constructor === Array &&
		typeof channels === 'object' && channels.constructor === Array) {
		this.value = value;
		this.channels = channels;
	}
	else if (arguments.length === 1 && util.isHsl(value)) {
		this.value = util.hslToArray(value);
		this.channels = this.value;
	}
	else if (arguments.length === 3) {
		this.value = [parseInt(arguments[0], 10), parseInt(arguments[1], 10), parseInt(arguments[2], 10)];
		this.channels = this.value;
	}
}

util.inherits(Hsl, Color);

/**
 * Returns the individual channels as an array
 *
 * @returns {Array} HSL value
 */
Hsl.prototype.toArray = function () {
	return this.value;
};

/**
 * Returns the HSL value to a HSL formatted string
 *
 * @returns {String} HSL value formatted as a string
 */
Hsl.prototype.toString = function () {
	return 'hsl(' + this.value[0] + ', ' +
					this.value[1] + '%, ' +
					this.value[2] + '%)';
};

return Hsl;

};