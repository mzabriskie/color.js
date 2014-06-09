var Color = require('./color'),
	util = require('./color-util');

function HexColor() {}

util.inherits(HexColor, Color);

module.exports = HexColor;