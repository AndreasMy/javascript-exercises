const leapYears = function(testYear) {
    const divideBy = [4, 100, 400];
    const remainderArray = [];

    for (i = 0; i < divideBy.length; i++) {
        dividedNum = testYear / divideBy[i];
        let remainder = dividedNum % 1;
        remainderArray.push(remainder);
    }
    
    if (remainderArray[1] === 0 && remainderArray[2] !== 0) {
        return false;
    } else if (remainderArray[1] === 0 && remainderArray[2] === 0) {
        return true;
    } else if (remainderArray[0] === 0 && remainderArray[1] === 0 && remainderArray[2] === 0) { 
        return true;
    } else if (remainderArray[0] === 0 && remainderArray[1] !== 0 && remainderArray[2] !== 0) {
        return true;
    } else {
        return false;
    }
};

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);

// Do not edit below this line
module.exports = leapYears;
