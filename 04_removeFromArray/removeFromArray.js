const removeFromArray = function(arr, ...theArgs) {
    //pass values from parameters into array
    for (let i = 0; i < theArgs.length; i++) {
        if (arr.includes(theArgs[i])) {
            arr.splice(arr.indexOf(theArgs[i]), 1);
        }
    }
    
    return arr;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, 'tacos');
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(['hey', 2, 3, 'ho'],'hey', 3);
removeFromArray([1, 2, 3, ],'1', 3);

// Do not edit below this line
module.exports = removeFromArray;
