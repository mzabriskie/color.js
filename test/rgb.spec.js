var Color = require('../src/color');

module.exports = {
	testConstructor: function (test) {
		test.ok(new Color.Rgb instanceof Color);
		test.equal(new Color.Rgb('rgb(255, 0, 0)'), 'rgb(255, 0, 0)');
		test.equal(new Color.Rgb('255', '0', '0'), 'rgb(255, 0, 0)');
		test.equal(new Color.Rgb(255, 0, 0), 'rgb(255, 0, 0)');

		test.done();
	},

	testValueOf: function (test) {
		test.deepEqual(new Color('#ff0000').toRgb().valueOf(), ['255', '0', '0']);

		test.done();
	},

	testToString: function (test) {
		test.equal(new Color('#ff0000').toRgb().toString(), 'rgb(255, 0, 0)');

		test.done();
	}
};