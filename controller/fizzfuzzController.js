/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const Common = require('../common/common');
const FizzBuzzService = require('../service/fizzbuzzService');
const {
  ERROR_KEY,
  INVALID_RANGE_MSG,
  INVALID_INPUT_MSG,
  ERROR_CODES,
} = require('../common/constants').MAPPER;

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
        res.status(ERROR_CODES.SUCCESS).send(response);
      } else {
        // error code, start is not less than end
        res.status(ERROR_CODES.BAD_REQUEST).send({[ERROR_KEY]: INVALID_RANGE_MSG});
      }
    } else {
      // error, input is not number
      res.status(ERROR_CODES.BAD_REQUEST).send({[ERROR_KEY]: INVALID_INPUT_MSG});
    }
  };
};
