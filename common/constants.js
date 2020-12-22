const ERROR_CODES = {
  BAD_REQUEST: 400,
  SUCCESS: 200,
};

const ERROR_KEY = 'error';
const INVALID_RANGE_MSG = 'Provided range is not Valid';
const INVALID_INPUT_MSG = 'Provided input field(s) are not Valid';

const START_RANGE = 0;
const END_RANGE = Math.pow(2, 32);

const NUMBER_TYPE = 'number';

const RESULT_STR = 'result';

const FIZZ_STR = 'fizz';
const BUZZ_STR = 'buzz';

const FIZZ_INT = 3;
const BUZZ_INT = 5;

const MAPPER = {
  ERROR_KEY,
  INVALID_RANGE_MSG,
  INVALID_INPUT_MSG,
  START_RANGE,
  END_RANGE,
  NUMBER_TYPE,
  RESULT_STR,
  FIZZ_STR,
  BUZZ_STR,
  FIZZ_INT,
  BUZZ_INT,
  ERROR_CODES,
};

module.exports = {
  MAPPER,
};
