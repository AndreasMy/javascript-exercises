const reverseString = function(string) {
    let splitString = string.split('');
    let reverseArray = splitString.reverse('');
    let joinArray = reverseArray.join('');
    return joinArray;
};


reverseString('hello');
reverseString('hello there');
reverseString('123! abc!')
reverseString('');

// Do not edit below this line
module.exports = reverseString;
