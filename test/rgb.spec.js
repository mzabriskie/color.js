var Color = require('../src/color');

module.exports = {
	testConstructor: function (test) {
		test.ok(new Color.Rgb instanceof Color);

		test.done();
	},

	testToArray: function (test) {
		test.deepEqual(new Color('#ff0000').toRgb().toArray(), ['255', '0', '0']);

		test.done();
	},

	testToString: function (test) {
		test.equal(new Color('#ff0000').toRgb().toString(), 'rgb(255, 0, 0)');

		test.done();
	}
};