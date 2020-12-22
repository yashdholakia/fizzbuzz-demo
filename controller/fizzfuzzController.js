/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const Common = require('../common/common');
const FizzBuzzService = require('../service/fizzbuzzService');

const fizzBuzzService = new FizzBuzzService();

module.exports = class FizzBuzzController {
  /**
 * Adds two numbers together.
 * @param {req} req HTTP request object.
 * @param {res} res HTTP Response object
  */
  async processNumbers(req, res) {
    const start = req.params.start === '0' ? 0 : parseInt(req.params.start) || '';
    const end = parseInt(req.params.end) || '';

    if (Common.validateType(start, end) === true) {
      if (Common.validateMinMax(start, end) === true) {
        const response = await fizzBuzzService.prepareFizzBuzz(start, end);
        res.status(200).send(response);
      } else {
        // error code, start is not less than end
        res.status(400).send({'error': 'Provided range is not Valid'});
      }
    } else {
      // error, input is not number
      res.status(400).send({'error': 'Provided input field(s) are not Valid'});
    }
  };
  async showHelp(req, res) {
    res.status(200).send('');
  };
};
