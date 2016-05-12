function rgb(value) {

    var validator = new RegExp("^[\\dA-F]{6}$");
    if (!validator.test(value)) {
        throw new TypeError(value + " is not a valid RGB color");
    }

    this._value = value;

    this.red = parseInt(value.substring(0, 2), 16);
    this.blue = parseInt(value.substring(2, 4), 16);
    this.green = parseInt(value.substring(4, 6), 16);

}

rgb.prototype.xy = function() {
    // TODO: poner bien las potencias
    var r = ((this.red + 0.055) / (1.0 + 0.055))**2.4 if (this.red > 0.04045) else (this.red / 12.92)
    var g = ((this.green + 0.055) / (1.0 + 0.055))**2.4 if (this.green > 0.04045) else (this.green / 12.92)
    var b = ((this.blue + 0.055) / (1.0 + 0.055))**2.4 if (this.blue > 0.04045) else (this.blue / 12.92)
    return [this._value];
}


function xy(value) {
    this.value = value;
}

rgb.prototype.rgb = function() {
    return [this.value];
}

module.exports = {
    rgb: rgb,
    xy: xy
};
