var util = require('./color-util');

module.exports = function (Color) {

/**
 * Constructs a RGB subclass of Color using the value provided
 *
 * @param value
 * @constructor
 */
function Rgb(value, channels) {
	if (typeof value === 'object' && value.constructor === Array &&
		typeof channels === 'object' && channels.constructor === Array) {
		this.value = value;
		this.channels = channels;
	}
	else if (arguments.length === 1 && util.isRgb(value)) {
		this.value = util.rgbToArray(value);
		this.channels = this.value;
	}
	else if (arguments.length === 3) {
		this.value = [arguments[0], arguments[1], arguments[2]];
		this.channels = this.value;
	}
}

util.inherits(Rgb, Color);

/**
 * Returns the individual channels as an array
 *
 * @returns {Array} RGB value
 */
Rgb.prototype.valueOf = function () {
	return this.value;
};

/**
 * Returns the RGB value to a RGB formatted string
 *
 * @returns {String} RGB value formatted as a string
 */
Rgb.prototype.toString = function () {
	return 'rgb(' + this.value[0] + ', ' +
					this.value[1] + ', ' +
					this.value[2] + ')';
};

return Rgb;

};