var Color = require('../src/color'),
	HexColor = require('../src/color-hex');

module.exports = {
	testConstructor: function (test) {
		test.ok(new HexColor instanceof Color);

		test.done();
	}
};