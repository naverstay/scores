'use strict';

const Handlebars = tars.packages.handlebars;

/**
 * You can add your own helpers to handlebarsHelpers Object
 * All helpers from that object will be available in templates
 * @type {Object}
 */
const handlebarsHelpers = {

    /**
     * This helper gets integer and returns value+1
     * @param  {Number} n Source
     * @return {Number} Result number+1
     */
    increase: function (value) {
        return parseInt(value) + 1;
    },

    /**
     * This helper gets integer and returns value+2
     * @param  {Number} n Source
     * @return {Number} Result number+2
     */
    increaseTwo: function (value) {
        return parseInt(value) + 2;
    },

    /**
     * This is an example of handlebars-helper
     * This helper gets string and returns it
     * @param  {String} str Source string
     * @return {String}     Result string
     */
    exampleHelper: function (str) {
        return str;
    }
};

module.exports = handlebarsHelpers;
