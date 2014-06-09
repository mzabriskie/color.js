var Color = require('../src/color'),
	HslColor = require('../src/color-hsl');

module.exports = {
	testConstructor: function (test) {
		test.ok(new HslColor instanceof Color);

		test.done();
	}
};