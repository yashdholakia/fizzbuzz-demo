const {
  RESULT_STR,
  FIZZ_STR,
  BUZZ_STR,
  FIZZ_INT,
  BUZZ_INT} = require('../common/constants').MAPPER;

module.exports = class FizzBuzzService {
  /**
 * Adds two numbers together.
 * @param {int} start The first number.
 * @param {int} end The second number.
 * @return {Array} Array representaion of fizzbuzz.
 */
  async prepareFizzBuzz(start, end) {
    const resultArray = [];

    for (let index = start; index <= end; index ++) {
      const response = {
        in: index,
        result: index.toString(),
      };

      if (index % FIZZ_INT === 0) {
        response[RESULT_STR] = FIZZ_STR;
        if (index % BUZZ_INT === 0) {
          response[RESULT_STR] += BUZZ_STR;
        }
        resultArray.push(response);
        continue;
      }

      if (index % BUZZ_INT === 0) {
        response[RESULT_STR] = BUZZ_STR;
        resultArray.push(response);
      } else {
        resultArray.push(response);
      }
    }

    return resultArray;
  }
};
