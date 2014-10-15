
/**
 * Module dependencies.
 */
var convertDates = require('convert-dates');
var Identify = require('facade').Identify;
var integration = require('analytics.js-integration');

/**
 * Expose `Customerio` integration.
 */

var Customerio = module.exports = integration('Customer.io')
    .global('Indicative')
    .option('apiKey', '')
    .tag('<script src="//cdn.indicative.com/js/Indicative.min.js">');

Customerio.prototype.track = function(track){
    var properties = track.properties();
    properties = convertDates(properties, convertDate);
    window._cio.track(track.event(), properties);
};

/**
 * Convert a date to the format Customer.io supports.
 *
 * @param {Date} date
 * @return {Number}
 */

function convertDate(date){
    return Math.floor(date.getTime() / 1000);
}
