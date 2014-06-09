var Color = require('../src/color'),
	RgbColor = require('../src/color-rgb');

module.exports = {
	testConstructor: function (test) {
		test.ok(new RgbColor instanceof Color);

		test.done();
	}
};