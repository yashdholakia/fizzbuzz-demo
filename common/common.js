const {NUMBER_TYPE, END_RANGE, START_RANGE} = require('./constants').MAPPER;

module.exports = {
  /**
 * Type Validator, checks if provided inputs are number or not
 * @param {int} start number
 * @param {int} end number
 * @return {boolean}
 */
  validateType: (start, end) => {
    if ((typeof (start) === NUMBER_TYPE && typeof (end) === NUMBER_TYPE)) {
      return true;
    }

    return false;
  },


  /**
 * Min Max Validator, checks if provided inputs are within
 *  range, and not in descendent range
 * @param {int} start number
 * @param {int} end number
 * @return {boolean}
 */
  validateMinMax: (start, end) => {
    const requiredEndRange = END_RANGE;
    const requiredStartRange = START_RANGE;

    if (start === end) {
      return false;
    }

    if (start < end) {
      const result = (start >= requiredStartRange &&
        end < requiredEndRange) ? true : false;
      return result;
    }

    return false;
  },

};
