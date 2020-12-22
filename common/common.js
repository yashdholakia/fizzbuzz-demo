/* eslint-disable max-len */

module.exports = {
  /**
 * Type Validator, checks if provided inputs are number or not
 * @param {int} start number
 * @param {int} end number
 * @return {boolean}
 */
  validateType: (start, end) => {
    if ((typeof (start) === 'number' && typeof (end) === 'number')) {
      return true;
    }

    return false;
  },


  /**
 * Min Max Validator, checks if provided inputs are within range, and not in descendent range
 * @param {int} start number
 * @param {int} end number
 * @return {boolean}
 */
  validateMinMax: (start, end) => {
    const requiredEndRange = Math.pow(2, 32);
    const requiredStartRange = 0;

    if (start === end) {
      return false;
    }

    if (start < end) {
      const result = (start >= requiredStartRange && end < requiredEndRange) ? true : false;
      return result;
    }

    return false;
  },

};
