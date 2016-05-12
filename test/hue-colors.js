var assert = require('chai').assert,
    expect = require('chai').expect,
    hueColors = require('../ccb-huejs/hue-colors');

describe('Hue Colors', HueColorsTests);

function HueColorsTests() {

    describe('RGB', RGBTests);
    //describe('XY', XYTests);

}

function RGBTests() {
    it('should be store RGB colors individually when a good value is set', function() {
        var rgb = new hueColors.rgb("FFAA10");
        assert.equal(255, rgb.red);
        assert.equal(170, rgb.blue);
        assert.equal(16, rgb.green);
    });

    it('should throw an error when input contains not hex values', function() {
        expect(function() {
            new hueColors.rgb("FFGXB5")
        }).to.throw(TypeError);
    });
}
