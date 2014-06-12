var util = require('./color-util');

module.exports = function (Color) {

/**
 * Constructs a HSL subclass of Color using the value provided
 *
 * @param value
 * @constructor
 */
function Hsl(value, channels) {
	this.value = value;
	this.channels = channels;
}

util.inherits(Hsl, Color);

/**
 * Returns the individual channels as an array
 *
 * @returns {Array} HSL channels
 */
Hsl.prototype.toArray = function () {
	return this.value;
};

/**
 * Returns the HSL channels to a HSL formatted string
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