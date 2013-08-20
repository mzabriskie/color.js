var Color = require('../src/color');

module.exports = {
    testConstructor: function (test) {
        test.deepEqual(new Color('red').channels, [255, 0, 0], 'Construct using keyword');
        test.deepEqual(new Color('#ff0000').channels, [255, 0, 0], 'Construct using hex');
        test.deepEqual(new Color('hsl(0, 100%, 50%)').channels, [255, 0, 0], 'Construct using hsl');
        test.deepEqual(new Color('rgb(255, 0, 0)').channels, [255, 0, 0], 'Construct using rgb');

        test.done();
    },

	testConversion: function (test) {
        var c = new Color('red');
		test.equal(c.toHex(), '#ff0000', 'Converting color to hex');
		test.equal(c.toHsl(), 'hsl(0, 100%, 50%)', 'Converting color to hsl');
		test.equal(c.toRgb(), 'rgb(255, 0, 0)', 'Converting color to rgb');

		test.done();
	},

    testMedian: function (test) {
        test.equal(Color.median('white', 'black'), '#7f7f7f', 'Median of white and black');
        test.equal(Color.median('red', 'blue'), '#7f007f', 'Median of red and blue');
        test.equal(Color.median('yellow', 'green'), '#7fbf00', 'Median of yellow and green');

        test.done();
    },

    testNormalize: function (test) {
        test.deepEqual(Color.normalize('red'), [255, 0, 0], 'Normalize red');
        test.deepEqual(Color.normalize('#ff0000'), [255, 0, 0], 'Normalize #ff0000');
        test.deepEqual(Color.normalize('hsl(0, 100%, 50%)'), [255, 0, 0], 'Normalize hsl(0, 100%, 50%)');
        test.deepEqual(Color.normalize('rgb(255, 0, 0)'), [255, 0, 0], 'Normalize rgb(255, 0, 0)');

        test.done();
    },

    testParse: function (test) {
        test.deepEqual(Color.parse('#ff0000'), ['ff', '00', '00'], 'Parsing hex');
        test.deepEqual(Color.parse('hsl(0, 100%, 50%)'), ['0', '100', '50'], 'Parsing hsl');
        test.deepEqual(Color.parse('rgb(255, 0, 0)'), ['255', '0', '0'], 'Parsing rgb');

        test.done();
    }
};
