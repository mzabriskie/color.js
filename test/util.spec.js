var util = require('../src/color-util');

module.exports = {
	testTrim: function (test) {
		test.equal(util.trim(' rgb ( 255, 255, 255 ) '), 'rgb(255,255,255)');
		test.equal(util.trim(' hsl ( 0, 100%, 50% ) '), 'hsl(0,100%,50%)');

		test.done();
	},

	testParse: function (test) {
		test.equal(util.parse(null), null);
		test.deepEqual(util.parse({toHex: function () { return '#f00'; }}), [255, 0, 0]);
		test.deepEqual(util.parse('red'), [255, 0, 0]);
		test.deepEqual(util.parse('rgb(255, 0, 0)'), [255, 0, 0]);
		test.deepEqual(util.parse('hsl(0, 100%, 50%)'), [255, 0, 0]);
		test.deepEqual(util.parse('#f00'), [255, 0, 0]);

		test.done();
	},

	testChannelsToRgbString: function (test) {
		test.equal(util.channelsToRgbString([255, 0, 0]), 'rgb(255, 0, 0)');
		test.equal(util.channelsToRgbString([100, 100, 100]), 'rgb(100, 100, 100)');

		test.done();
	},

	testChannelsToHslString: function (test) {
		test.equal(util.channelsToHslString([255, 0, 0]), 'hsl(0, 100%, 50%)');

		test.done();
	},

	testChannelsToHexString: function (test) {
		test.equal(util.channelsToHexString([255, 0, 0]), '#ff0000');

		test.done();
	},

	testRgbToArray: function (test) {
		test.equal(util.rgbToArray('foo'), null);
		test.deepEqual(util.rgbToArray('rgb(255, 0, 0)'), [255, 0, 0]);

		test.done();
	},

	testHslToArray: function (test) {
		test.equal(util.rgbToArray('foo'), null);
		test.deepEqual(util.hslToArray('hsl(0, 100%, 50%)'), [0, 100, 50]);

		test.done();
	},

	testHexToArray: function (test) {
		test.equal(util.hexToArray('foo'), null);
		test.deepEqual(util.hexToArray('#ff0000'), ['ff', '00', '00'])

		test.done();
	},

	testRgbToHex: function (test) {
		test.equal(util.rgbToHex('foo'), null);
		test.equal(util.rgbToHex('rgb(255, 0, 0)'), '#ff0000');
		test.deepEqual(util.rgbToHex('rgb(255, 0, 0)', true), ['ff', '00', '00']);

		test.done();
	},

	testHueToRgb: function (test) {
		test.equal(util.hueToRgb(0, 1, 0.33), 255);
		test.equal(util.hueToRgb(0, 1, 0), 0);
		test.equal(util.hueToRgb(0.625, 0.875, 0.8333333333333333), 159.375);
		test.equal(util.hueToRgb(0.625, 0.875, 0.5), 223.125);

		test.done();
	},

	testHslToHex: function (test) {
		test.equal(util.hslToHex('foo'), null);
		test.equal(util.hslToHex('hsl(180, 50%, 75%)'), '#9fdfdf');
		test.equal(util.hslToHex('hsl(0, 0%, 100%)'), '#ffffff');
		test.equal(util.hslToHex('hsl(0, 100%, 50%)'), '#ff0000');
		test.deepEqual(util.hslToHex('hsl(0, 100%, 50%)', true), ['ff', '00', '00']);

		test.done();
	},

	testHexToRgb: function (test) {
		test.equal(util.hexToRgb('foo'), null);
		test.equal(util.hexToRgb('#ff0000'), 'rgb(255, 0, 0)');
		test.deepEqual(util.hexToRgb('#ff0000', true), [255, 0, 0]);

		test.done();
	},

	testKeyToHex: function (test) {
		test.equal(util.keyToHex('foo'), null);
		test.equal(util.keyToHex('red'), '#ff0000');
		test.deepEqual(util.keyToHex('red', true), ['ff', '00', '00']);

		test.done();
	},

	testIsRgb: function (test) {
		test.ok(util.isRgb('rgb(255, 0, 0)'));
		test.ok(!util.isRgb('(255, 0, 0)'));
		test.ok(!util.isRgb('#ff0000'));

		test.done();
	},

	testIsHsl: function (test) {
		test.ok(util.isHsl('hsl(0, 100%, 50%)'));
		test.ok(!util.isHsl('hsl 0, 100%, 50%'));
		test.ok(!util.isHsl('red'));

		test.done();
	},

	testIsHex: function (test) {
		test.ok(util.isHex('#ff0000'));
		test.ok(util.isHex('ff0000'));
		test.ok(util.isHex('f00'));
		test.ok(!util.isHex('foo'));

		test.done();
	},

	testIsKeyword: function (test) {
		test.ok(util.isKeyword('red'));
		test.ok(!util.isKeyword('foo'));

		test.done();
	},

	testMedian: function (test) {
		test.equal(util.median('black', 'white'), '#7f7f7f');
		test.equal(util.median('red', 'blue'), '#7f007f');
		test.equal(util.median('purple', 'green'), '#404040');

		test.done();
	}
};