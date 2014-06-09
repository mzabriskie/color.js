var Color = require('./color'),
	util = require('./color-util');

function HslColor() {}

util.inherits(HslColor, Color);

module.exports = HslColor;