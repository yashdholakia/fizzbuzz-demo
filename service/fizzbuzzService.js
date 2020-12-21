module.exports = class FizzBuzzService{

    async prepareFizzBuzz  (start, end) {

      

        const resultArray = [];

        for(let index = start;index < end; index ++){
            const response = {
                in : index,
                result : index.toString()
            }
            
            if(index % 3 === 0){
                response['result'] = 'fizz';
                if(index % 5 === 0){
                    response['result'] += 'buzz';
                }
                resultArray.push(response);
                continue;
            }

            if(index % 5 === 0){
                response['result'] = 'buzz';
                resultArray.push(response);
            }

            else{
                resultArray.push(response); 
            }
        }

        return resultArray;
    }

}