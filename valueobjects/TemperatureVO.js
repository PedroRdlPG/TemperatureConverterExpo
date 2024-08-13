/**
 * Temperature Representation
 * 
 * @constructor
 * @param {number} value - The temp value.
 * @param {string} unit - The temp unit. 
 *          Valid values: C or F.
 */

exports.TemperatureVO = function (value, unit) {
    this.value = value;
    this.unit = unit;
};