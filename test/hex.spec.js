var Color = require('../src/color');

module.exports = {
	testConstructor: function (test) {
		test.ok(new Color.Hex instanceof Color);
		test.equal(new Color.Hex('#ff0000'), '#ff0000');
		test.equal(new Color.Hex('#f00'), '#ff0000');
		test.equal(new Color.Hex('ff', '00', '00'), '#ff0000');

		test.done();
	},

	testValueOf: function (test) {
		test.deepEqual(new Color('#ff0000').toHex().valueOf(), ['ff', '00', '00']);

		test.done();
	},

	testToString: function (test) {
		test.equal(new Color('#ff0000').toHex().toString(), '#ff0000');

		test.done();
	}
};