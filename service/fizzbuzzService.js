module.exports = class FizzBuzzService {
  /**
 * Adds two numbers together.
 * @param {int} start The first number.
 * @param {int} end The second number.
 * @return {Array} Array representaion of fizzbuzz.
 */
  async prepareFizzBuzz(start, end) {
    const resultArray = [];

    for (let index = start; index < end; index ++) {
      const response = {
        in: index,
        result: index.toString(),
      };

      if (index % 3 === 0) {
        response['result'] = 'fizz';
        if (index % 5 === 0) {
          response['result'] += 'buzz';
        }
        resultArray.push(response);
        continue;
      }

      if (index % 5 === 0) {
        response['result'] = 'buzz';
        resultArray.push(response);
      } else {
        resultArray.push(response);
      }
    }

    return resultArray;
  }
};
