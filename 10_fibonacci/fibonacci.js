const fibonacci = function(num) {
    if(num <= 0) {
        return 'OOPS';
    }
    let num1 = 0;
    let num2 = 1;
    for(i=0;i<num;i++) {
            if (i === 0) {
                currentNum = 1;
                continue;
            }
        currentNum = num1 + num2
        num1 = num2;
        num2 = currentNum; 
        console.log(currentNum)
    };

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
