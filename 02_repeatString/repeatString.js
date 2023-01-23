const repeatString = function(string, times, number) {
    let repeatedString = '';
    while (times > 0) {
            repeatedString += string;
          times--;
    }
    if (times < 0) {
        return "ERROR";
    } else if (number > 0) {
        repeatedString += string;
        number--;
    } else {
        return repeatedString;
    }

    // use math.random to repeat string random times
};

repeatString('hey,', 3);
repeatString('hey,', 10);
repeatString('hey,', 1);
repeatString('hey,', 0);
repeatString('hey,', -1);
repeatString('hey,', 1);

// Do not edit below this line
module.exports = repeatString;
