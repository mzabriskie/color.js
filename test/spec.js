var Color = require('../src/color');
	Color.Hex = require('../src/color-hex');
	Color.Hsl = require('../src/color-hsl');
	Color.Rgb = require('../src/color-rgb');

module.exports = {
    testConstructor: function (test) {
        test.deepEqual(new Color('red').channels, [255, 0, 0], 'Construct using keyword');
        test.deepEqual(new Color('#ff0000').channels, [255, 0, 0], 'Construct using hex');
        test.deepEqual(new Color('hsl(0, 100%, 50%)').channels, [255, 0, 0], 'Construct using hsl');
        test.deepEqual(new Color('rgb(255, 0, 0)').channels, [255, 0, 0], 'Construct using rgb');
        test.equal(new Color('foo').channels, null, 'Construct using foo');

        test.done();
    },

	testConversion: function (test) {
		test.ok(new Color('red').toHex() instanceof Color.Hex);
		test.ok(new Color('red').toHsl() instanceof Color.Hsl);
		test.ok(new Color('red').toRgb() instanceof Color.Rgb);

		test.done();
	},

    testValidation: function (test) {
        test.equal(Color.isHex('#f00'), true, 'Validating isHex');
        test.equal(Color.isHex('#ff0000'), true, 'Validating isHex');
        test.equal(Color.isHex('red'), false, 'Validating isHex');
        test.equal(Color.isHex('hsl(0, 100%, 50%)'), false, 'Validating isHex');
        test.equal(Color.isHex('rgb(255, 0, 0)'), false, 'Validating isHex');

        test.equal(Color.isHsl('hsl(0,100%,50%)'), true, 'Validating isHsl');
        test.equal(Color.isHsl('hsl(0, 100%, 50%)'), true, 'Validating isHsl');
        test.equal(Color.isHsl('red'), false, 'Validating isHsl');
        test.equal(Color.isHsl('#ff0000'), false, 'Validating isHsl');
        test.equal(Color.isHsl('rgb(255, 0, 0)'), false, 'Validating isHsl');

        test.equal(Color.isRgb('rgb(255,0,0)'), true, 'Validating isRgb');
        test.equal(Color.isRgb('rgb(255, 0, 0)'), true, 'Validating isRgb');
        test.equal(Color.isRgb('red'), false, 'Validating isRgb');
        test.equal(Color.isRgb('#ff0000'), false, 'Validating isRgb');
        test.equal(Color.isRgb('hsl(0, 100%, 50%)'), false, 'Validating isRgb');

        test.equal(Color.isKeyword('red'), true, 'Validating isKeyword');
        test.equal(Color.isKeyword('yellow'), true, 'Validating isKeyword');
        test.equal(Color.isKeyword('blue'), true, 'Validating isKeyword');
        test.equal(Color.isKeyword('#ff0000'), false, 'Validating isKeyword');
        test.equal(Color.isKeyword('rgb(255, 0, 0)'), false, 'Validating isKeyword');
        test.equal(Color.isKeyword('hsl(0, 100%, 50%)'), false, 'Validating isKeyword');

        test.done();
    },

    testMedian: function (test) {
        test.equal(Color.median('white', 'black'), '#7f7f7f', 'Median of white and black');
        test.equal(Color.median('red', 'blue'), '#7f007f', 'Median of red and blue');
        test.equal(Color.median('yellow', 'green'), '#7fbf00', 'Median of yellow and green');
        test.equal(Color.median('foo', 'bar'), null, 'Median of foo and bar');

        var c = new Color('white');
        test.equal(c.median('black'), '#7f7f7f', 'Median prototype method uses color of instance');

        test.done();
    },

    testParse: function (test) {
        test.deepEqual(Color.parse('#ff0000'), ['ff', '00', '00'], 'Parsing hex');
        test.deepEqual(Color.parse('hsl(0, 100%, 50%)'), ['0', '100', '50'], 'Parsing hsl');
        test.deepEqual(Color.parse('rgb(255, 0, 0)'), ['255', '0', '0'], 'Parsing rgb');
        test.deepEqual(Color.parse('foo'), null, 'Parsing foo');

        test.done();
    }
};
