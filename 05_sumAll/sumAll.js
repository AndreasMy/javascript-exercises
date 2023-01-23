const sumAll = function(x, y) {
const argsArray = [x, y].sort();

for (i = 0; i < argsArray.length; i++) {
    if (argsArray[i] < 0) {
        return "ERROR"
    } else if (typeof argsArray[i] === "string") {
        return "ERROR"
    } else if (isNaN(argsArray[i])) {
        return "ERROR"
    }
}

    const addNum = [];
    for (i = 0; i <= argsArray[1]; i++) {
        addNum[addNum.length] = i;
    }
  
    let sum = 0;
    for (let i = 0; i < addNum.length; i++) {
        sum += addNum[i]
    }

    return sum;
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, '90');
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;