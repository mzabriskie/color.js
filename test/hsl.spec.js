var Color = require('../src/color'),
	HslColor = require('../src/color-hsl');

module.exports = {
	testConstructor: function (test) {
		test.ok(new HslColor instanceof Color);

		test.done();
	},

	testToArray: function (test) {
		test.deepEqual(new Color('#ff0000').toHsl().toArray(), ['0', '100', '50']);

		test.done();
	},

	testToString: function (test) {
		test.equal(new Color('#ff0000').toHsl().toString(), 'hsl(0, 100%, 50%)');

		test.done();
	}
};