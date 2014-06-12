var Color = require('../src/color');

module.exports = {
	testConstructor: function (test) {
		test.ok(new Color.Hsl instanceof Color);
		test.equal(new Color.Hsl('hsl(0, 100%, 50%)'), 'hsl(0, 100%, 50%)');
		test.equal(new Color.Hsl('0', '100%', '50%'), 'hsl(0, 100%, 50%)');
		test.equal(new Color.Hsl(0, 100, 50), 'hsl(0, 100%, 50%)');

		test.done();
	},

	testValueOf: function (test) {
		test.deepEqual(new Color('#ff0000').toHsl().valueOf(), ['0', '100', '50']);

		test.done();
	},

	testToString: function (test) {
		test.equal(new Color('#ff0000').toHsl().toString(), 'hsl(0, 100%, 50%)');

		test.done();
	}
};