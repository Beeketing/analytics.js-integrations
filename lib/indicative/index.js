
/**
 * Module dependencies.
 */
var Identify = require('facade').Identify;
var integration = require('analytics.js-integration');

/**
 * Expose `Indicative` integration.
 * http://www.indicative.com/docs/integration.html#javascript
 */

var IndicativeJs = module.exports = integration('Indicative')
    .global('Indicative')
    .option('apiKey', '')
    .tag('<script src="//cdn.indicative.com/js/Indicative.min.js">');


/**
 * Initialize.
 *
 * @param {Object} page
 */

IndicativeJs.prototype.initialize = function(page){
    var self = this;

    this.load(function() {
        Indicative.initialize(self.options.apiKey);
        self.ready();
    });
};

/**
 * Identify.
 *
 * @param {Identify} identify
 */

IndicativeJs.prototype.identify = function(identify) {
    if (!identify.userId()) return this.debug('user id required');
    Indicative.setUniqueID(identify.userId());
};


/**
 * Track
 * @param track
 * @param options
 */
IndicativeJs.prototype.track = function(track, options) {
    var properties = track.properties();
    Indicative.buildEvent(track.event(), properties);
};

/**
 * Convert a date to the format Customer.io supports.
 *
 * @param {Date} date
 * @return {Number}
 */

/**
 * Loaded?
 *
 * @return {Boolean}
 */

IndicativeJs.prototype.loaded = function(){
    return !! window.Indicative;
};