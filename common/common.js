



module.exports = {

    validateType: (start, end) =>{
      

        if((typeof(start) === 'number' && typeof(end) === 'number')){
            return true;
        }

        return false;
    },

    validateMinMax: (start, end) => {
        const requiredEndRange = Math.pow(2,32);
        const requiredStartRange = 0;

        if(start < end){
            
            const result =  (start > requiredStartRange && end < requiredEndRange) ? true : false;

            return result;
            
        }



        return false;
    },

    validateRange: (start, end) => {
        

        return (start > requiredStartRange && end < requiredEndRange) ? true : false;

    }

}