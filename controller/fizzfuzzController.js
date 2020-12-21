const Common = require('../common/common')
const FizzBuzzService = require('../service/fizzbuzzService');

const fizzBuzzService = new FizzBuzzService();

module.exports = class FizzBuzzController {
   

    async processNumbers (req, res) {
        // handle validation of start and end range
        // handle the validation that range is a number, not empty, 

      
        let start = parseInt(req.params.start) || '';
        let end = parseInt(req.params.end) || '';

        if(Common.validateType(start, end) === true){
            
            if(Common.validateMinMax(start, end) === true){
                const response = await fizzBuzzService.prepareFizzBuzz(start, end)
                res.status(200).send(response);
            }else{
                //error code, start is not less than end
                res.status(400).send({'error' : 'Provided range is not valid'});
            }
        }else{
            //error, input is not number
            res.status(400).send({'error' : 'Provided input field(s) are not number(s)'});
        }

    }
}