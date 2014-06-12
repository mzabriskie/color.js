var Color = require('../src/color'),
	HexColor = require('../src/color-hex');

module.exports = {
	testConstructor: function (test) {
		test.ok(new HexColor instanceof Color);

		test.done();
	},

	testToArray: function (test) {
		test.deepEqual(new Color('#ff0000').toHex().toArray(), ['ff', '00', '00']);

		test.done();
	},

	testToString: function (test) {
		test.equal(new Color('#ff0000').toHex().toString(), '#ff0000');

		test.done();
	}
};