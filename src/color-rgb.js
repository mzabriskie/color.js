var util = require('./color-util');

module.exports = function (Color) {

/**
 * Constructs a RGB subclass of Color using the value provided
 *
 * @param value
 * @constructor
 */
function Rgb(value, channels) {
	this.value = value;
	this.channels = channels;
}

util.inherits(Rgb, Color);

/**
 * Returns the individual channels as an array
 *
 * @returns {Array} RGB channels
 */
Rgb.prototype.toArray = function () {
	return this.value;
};

/**
 * Returns the RGB channels to a RGB formatted string
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