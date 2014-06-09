var Color = require('./color'),
	util = require('./color-util');

function RgbColor() {}

util.inherits(RgbColor, Color);

module.exports = RgbColor;